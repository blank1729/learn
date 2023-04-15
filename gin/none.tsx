import React, { useState, useEffect, useRef } from 'react';

const Timeline = ({ duration, clips, selectedClipId, onSelectClip, onChangeClip, onDeleteClip }) => {
  const [scale, setScale] = useState(1);
  const [scroll, setScroll] = useState(0);
  const [isDraggingClip, setIsDraggingClip] = useState(false);
  const [draggingClipId, setDraggingClipId] = useState(null);
  const clipRefs = useRef({});

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Minus') {
        setScale(scale => scale / 1.2);
      } else if (event.code === 'Equal') {
        setScale(scale => scale * 1.2);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const selectClip = (event, clip) => {
    event.stopPropagation();
    onSelectClip(clip.id);
  };

  const startDraggingClip = (event, clip) => {
    event.stopPropagation();
    setIsDraggingClip(true);
    setDraggingClipId(clip.id);
  };

  const handleMouseMove = event => {
    if (!isDraggingClip) {
      return;
    }
    const clipRef = clipRefs.current[draggingClipId];
    if (!clipRef) {
      return;
    }
    const timelineRect = event.currentTarget.getBoundingClientRect();
    const clipRect = clipRef.getBoundingClientRect();
    const newX = event.clientX - timelineRect.left - clipRect.width / 2;
    const newTime = (newX - scroll) / scale;
    const newClip = { ...clips.find(clip => clip.id === draggingClipId), time: newTime };
    onChangeClip(newClip);
  };

  const handleMouseUp = event => {
    setIsDraggingClip(false);
  };

  const handleDeleteClick = (event, clip) => {
    event.stopPropagation();
    onDeleteClip(clip.id);
  };

  const handleTimelineInertiaScroll = event => {
    event.preventDefault();
    setScroll(scroll => scroll + event.deltaX);
  };

  return (
    <div className="timeline" onWheel={handleTimelineInertiaScroll}>
      <div className="timeline-clips" style={{ width: duration * scale }}>
        {clips.map(clip => (
          <div
            key={clip.id}
            ref={ref => clipRefs.current[clip.id] = ref}
            className={`timeline-clip ${selectedClipId === clip.id ? 'selected' : ''}`}
            style={{ left: clip.time * scale }}
            onMouseDown={event => selectClip(event, clip)}
            onTouchStart={event => selectClip(event, clip)}
            onTouchMove={event => {
              event.preventDefault();
              startDraggingClip(event, clip);
            }}
          >
            <div className="timeline-clip-handle" onMouseDown={event => startDraggingClip(event, clip)} />
            <div className="timeline-clip-delete" onClick={event => handleDeleteClick(event, clip)} />
          </div>
        ))}
      </div>
      <div className="timeline-scale">
        <button onClick={() => setScale(scale => scale / 1.2)}>-</button>
        <span>{`${scale.toFixed(2)}x`}</span>
        <button onClick={() => setScale(scale => scale * 1.2)}>+</button>
      </div>
      <div className="timeline-tooltip" style={{ left: scroll + 10 }}>
        {`Time: ${((selectedClipId !== null) ? clips.find(clip => clip.id === selectedClipId).time : 0).toFixed(2)}`}
      </div>
      {isDraggingClip && <div className="timeline-dragging-overlay" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} />}
    </div>
  );
};

export default Timeline;

import React from 'react'
import './gallery.css'
import { Link } from 'react-router-dom'

const imgs = [
    "https://wallpapercave.com/wp/BEeBb6B.jpg",
    "https://jooinn.com/images/beautiful-sky-29.jpg",
    "https://wallpapercave.com/wp/398eJDV.jpg",
    "https://getwallpapers.com/wallpaper/full/5/7/6/833298-top-pretty-nature-backgrounds-1920x1200-pc.jpg",
    "https://wallpapercave.com/wp/wp2424390.jpg",
    "https://wallpaperset.com/w/full/f/6/3/117583.jpg",
    "https://wallpapercave.com/wp/Ms3DQjz.jpg",
    "https://www.desicomments.com/wallpapers/wp-content/uploads/2014/12/Beautiful-Sunset-View.jpg",
    "https://1.bp.blogspot.com/-Nof4FIS28UA/TaSB3mVHGjI/AAAAAAAABjc/ImQzdvdRYYo/s1600/pretty3.jpg",
    "https://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-13.jpg",
    "https://jooinn.com/images/sunset-532.png"
]

function Gallery() {

  return (
    <main className='w-screen h-screen bg-violet-300 grid grid-cols-10'>
        <div className='left-text text-9xl text-white font-bold my-auto'>GALLERY</div>

        <section className='col-span-9 mt-8 mx-[5%]'>
            <div className='flex gap-2 my-4'>
                <Link to='something' className='px-2 py-1 rounded-3xl border-2 border-white'>something</Link>
                <Link to='something' className='px-2 py-1 rounded-3xl border-2 border-white'>tag2</Link>
                <Link to='something' className='px-2 py-1 rounded-3xl border-2 border-white'>tag3</Link>
            </div>
            <div className="image-grid columns-4 gap-y-2 gap-3">
                {
                    imgs.map(img=> {
                        return <div className='w-full h-full overflow-hidden hover:scale-105 duration-300'>
                            <img className='mb-3 hover:scale-[115%] duration-500' src={img} key={img}/>
                        </div>
                    })
                }
            </div>
        </section>
    </main>
  )
}

export default Gallery
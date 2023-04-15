
fun main(args: Array<String>) {
    var b: String? = "abc"
    val l = b!!.length
    println("something ${1+2}")
    say_hello("pullesh")
}


fun say_hello(name : String){
    println("Hello $name")
}
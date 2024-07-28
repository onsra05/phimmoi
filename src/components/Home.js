function Home() {
    return(
        <div classname="p-4 bg-black flex items-center justify-between">
            <div classname="flex items-center space-x-4">
                <h1 classname="text-[40] uppercase font-bold text-red-800">Movie</h1>
                <nav classname="flex items-center space-x-4">
                    <a href="https://www.youtube. com/w" classname="text-white font-[20]">Home</a>
                    <a href="https://www.youtube. com/wa0v3aa4" classname="text-white font-[20]">About</a>
                    <a href="https://www.youtube. com/wat" classname="text-white font-[20]">Contacts</a>
                </nav>
            </div>
            <div classname="flex items-center space-x-4 " >
                <input type="text" placeholder="Search"/>
                <button classname="p-2 text-white bg-red-600">Search</button>
            </div>
            

        </div>
    )
}
export default Home;
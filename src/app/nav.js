export default function Nav() {
    return (
        <div className="fixed top-8 w-full flex items-center">
            <div className="mx-auto flex items-center text-lg w-1/4 justify-around">
                <a href="/home" className="border border-transparent hover:border-b-white">Home</a>
                <a href="/about" className="border border-transparent hover:border-b-white">About</a>
                <a href="/stats" className="border border-transparent hover:border-b-white">Stats</a>
            </div>
        </div>
    );
}

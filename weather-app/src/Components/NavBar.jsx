export default function NavBar({ children }) {
    return (
        <div className="flex justify-between w-full h-16 items-center px-4">
            <div className="flex items-center p-4">
                <img src="/images/logo.svg" alt="logo" />
            </div>
            {children}
        </div>
    )
}
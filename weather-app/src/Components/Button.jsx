export default function Button({name}) {
    return (
        <button type="submit" className="w-full h-12 rounded-lg bg-[#4657D9] text-white mt-4 cursor-pointer hover:bg-[#5568EA] transition-colors">{name}</button>
    )
}
const DropdownMenu = ({ children, className = "" }) => (
    <div className={`absolute left-0 mt-2 w-full bg-black border-[1px] border-white/50 shadow-lg rounded-md overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${className}`}>
        <div className="py-2 font-menlo">
            {children}
        </div>
    </div>
);

export default DropdownMenu;
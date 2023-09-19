const LastInView = ({ children }) => {
    return (
        <div className="fixed top-20 px-5 right-5 min-w-min h-10 rounded-lg bg-slate-500 text-white text-lg font-bol grid place-items-center">
            {children}
        </div>
    );
};

export default LastInView;

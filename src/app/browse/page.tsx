import Link from "next/link";

export default function BrowsePage() {
    return (
        <div className="bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 font-display text-[#111418] h-screen flex flex-col overflow-hidden">
            <header className="flex shrink-0 items-center justify-between whitespace-nowrap glass-header px-6 py-3 z-30">
                <Link href="/" className="flex items-center gap-4 text-[#111418]">
                    <div className="size-8 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl">shield_person</span>
                    </div>
                    <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">CivicConnect</h2>
                </Link>
                <div className="flex flex-1 justify-end gap-8">
                    <div className="hidden md:flex items-center gap-9">
                        <Link className="text-[#111418] text-sm font-medium leading-normal hover:text-primary transition-colors" href="/dashboard">Dashboard</Link>
                        <Link className="text-[#111418] text-sm font-medium leading-normal hover:text-primary transition-colors" href="/dashboard?view=my_reports">My Reports</Link>
                        <Link className="text-[#111418] text-sm font-medium leading-normal hover:text-primary text-primary" href="/browse">Community</Link>
                        <Link className="text-[#111418] text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Help</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/report">
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20">
                                <span className="truncate">Report an Issue</span>
                            </button>
                        </Link>
                        <div
                            className="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-white/50 shadow-sm"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpp0LUyHUYL5aCP2Jh4n960F5iBnRiyD286OYUS1RhovTicm4ScH69nsGsS0opDi-WhBgxDr8tCpKkJHp5IPDWSUNJwqNgygFT13XINjEbLLAW3qkbnqbf4uMUAexlaw1ngt522d3bn4D1zWH7MYC1Og6wJNnw3Q6kK0pZZ6YDgQN3je2YSeI376nRghaFXmLuav6Nqp2WPe853F9757wc-x26OMSPsnGNMDXSZ4iwkucq9ZgaUgWXNsaCyThm8B2AD-eT4fMMoBI")' }}
                        ></div>
                    </div>
                </div>
            </header>
            <main className="flex flex-1 overflow-hidden relative">
                <div className="flex flex-col w-full md:w-[450px] lg:w-[500px] xl:w-[550px] glass-panel h-full shrink-0 shadow-2xl z-10 relative">
                    <div className="flex flex-col border-b border-white/30 bg-white/40 backdrop-blur-md p-6 pb-2 gap-4 shrink-0 z-20">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-[#111418] text-2xl font-black leading-tight tracking-[-0.033em]">Public Reports</h1>
                            <p className="text-[#617589] text-sm font-normal leading-normal">Browse issues reported by neighbors in your area.</p>
                        </div>
                        <div className="relative">
                            <label className="flex flex-col w-full h-11">
                                <div className="flex w-full flex-1 items-stretch rounded-lg h-full glass-input focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-white/70 transition-all shadow-sm">
                                    <div className="text-[#617589] flex border-none items-center justify-center pl-4 rounded-l-lg">
                                        <span className="material-symbols-outlined">search</span>
                                    </div>
                                    <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 border-none bg-transparent h-full placeholder:text-[#617589] px-3 rounded-l-none text-sm font-normal leading-normal" placeholder="Search by keyword, ID, or address..." />
                                </div>
                            </label>
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
                            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg glass-input hover:bg-white/70 transition-colors pl-3 pr-2 shadow-sm">
                                <p className="text-[#111418] text-xs font-bold leading-normal">Category</p>
                                <span className="material-symbols-outlined text-lg">expand_more</span>
                            </button>
                            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg glass-input hover:bg-white/70 transition-colors pl-3 pr-2 shadow-sm">
                                <p className="text-[#111418] text-xs font-bold leading-normal">Status</p>
                                <span className="material-symbols-outlined text-lg">expand_more</span>
                            </button>
                            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg glass-input hover:bg-white/70 transition-colors pl-3 pr-2 shadow-sm">
                                <p className="text-[#111418] text-xs font-bold leading-normal">Date</p>
                                <span className="material-symbols-outlined text-lg">expand_more</span>
                            </button>
                            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/40 border border-white/50 hover:bg-white/60 transition-colors px-3 shadow-sm backdrop-blur-sm">
                                <span className="material-symbols-outlined text-lg text-[#617589]">filter_list</span>
                                <p className="text-[#111418] text-xs font-medium leading-normal">More</p>
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 bg-transparent no-scrollbar">
                        <div className="flex flex-col gap-4">
                            <div className="group flex flex-col gap-3 rounded-xl bg-white/80 backdrop-blur-md p-4 shadow-lg border-l-4 border-l-primary border-y border-r border-y-white/50 border-r-white/50 cursor-pointer hover:bg-white/90 transition-all">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="bg-blue-100/80 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide backdrop-blur-sm">Infrastructure</span>
                                        <span className="text-[#617589] text-xs">• 2h ago</span>
                                    </div>
                                    <span className="flex items-center gap-1 bg-yellow-100/80 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                                        <span className="material-symbols-outlined text-xs">pending</span> Review
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-[#111418] text-base font-bold leading-tight mb-1 group-hover:text-primary transition-colors">Large Pothole on Main St.</h3>
                                    <p className="text-[#617589] text-sm leading-relaxed line-clamp-2">A large pothole has formed in the right lane causing traffic to slow down significantly. Needs urgent repair.</p>
                                </div>
                                <div className="flex items-center justify-between pt-2 border-t border-[#f0f2f4]/60">
                                    <div className="flex items-center gap-1 text-[#617589] text-xs">
                                        <span className="material-symbols-outlined text-base">location_on</span>
                                        <span className="truncate max-w-[150px]">1200 Main Street, Downtown</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button className="flex items-center gap-1 text-[#617589] hover:text-primary transition-colors text-xs font-medium">
                                            <span className="material-symbols-outlined text-base">thumb_up</span> 24
                                        </button>
                                        <button className="flex items-center gap-1 text-[#617589] hover:text-primary transition-colors text-xs font-medium">
                                            <span className="material-symbols-outlined text-base">chat_bubble</span> 3
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="group flex flex-col gap-3 rounded-xl glass-card p-4 hover:border-primary/40 cursor-pointer hover:shadow-xl hover:bg-white/75 hover:-translate-y-0.5 transition-all duration-300">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="bg-green-100/80 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide backdrop-blur-sm">Sanitation</span>
                                        <span className="text-[#617589] text-xs">• 5h ago</span>
                                    </div>
                                    <span className="flex items-center gap-1 bg-blue-100/80 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                                        <span className="material-symbols-outlined text-xs">engineering</span> In Progress
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <div
                                        className="bg-center bg-no-repeat bg-cover rounded-lg w-16 h-16 shrink-0 shadow-sm"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOUSPBuN33q-71ffJ3RarMEIbnMc5yeP5J5ytIkYPNzu1urYMYl5W9RYLGwx_hHWEo19Tb6SCDMRHhZSgCQI25nFinDACQowQVYt_wT7xwWxzftJY2bqcEThpiURq59yP-0XOlMpSnL4G3t1yHg2v-2Rx7jrKfGXsRau-xAuerc7O2ak3O23RNT-V5rKqotf661yHag37h5Uvb8s2mUlUHmKINmSvAAuZEgogZWcEC6tWRUxtCXADMKNB_SDBbaHV0eRMjQBZHwP0")' }}
                                    ></div>
                                    <div>
                                        <h3 className="text-[#111418] text-base font-bold leading-tight mb-1 group-hover:text-primary transition-colors">Missed Trash Pickup</h3>
                                        <p className="text-[#617589] text-sm leading-relaxed line-clamp-2">Trash collection was missed for the entire block of Pine Avenue today.</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-2 border-t border-white/40">
                                    <div className="flex items-center gap-1 text-[#617589] text-xs">
                                        <span className="material-symbols-outlined text-base">location_on</span>
                                        <span className="truncate max-w-[150px]">45 Pine Ave, Westside</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button className="flex items-center gap-1 text-[#617589] hover:text-primary transition-colors text-xs font-medium">
                                            <span className="material-symbols-outlined text-base">thumb_up</span> 8
                                        </button>
                                        <button className="flex items-center gap-1 text-[#617589] hover:text-primary transition-colors text-xs font-medium">
                                            <span className="material-symbols-outlined text-base">chat_bubble</span> 0
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* More items... */}
                        </div>
                    </div>
                    <div className="p-4 border-t border-white/30 bg-white/40 backdrop-blur-md flex justify-center shrink-0">
                        <button className="text-sm font-bold text-primary hover:text-primary/80 transition-colors">Load more reports</button>
                    </div>
                </div>
                <div className="flex-1 relative hidden md:block bg-[#e5e3df]">
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBo7cT7D_cd4uKzfITSjS24z_czRn23WHoTfvVOKG3ESLUduqRsdT1OqLvUz4nU3fWGprzvE_kdzAD9Z8vIsjylIn0m-anfhrhjWnc1YGpaVOOjzatBKINn0Tb0DCR1Ztactx2Dk6Qnp95MwqO5RdkpiBBxFCQGmuwwJOUZR4SISdNH1pcsyc6U9XOn4NRXB3XX61vlGJc4ap53TYimKSi8NjsGimkNbmHpqbWMIq4iK7qB0Scei53YLlZ0hNV1GuHJ5DchF80iXp4")',
                            filter: 'grayscale(20%) contrast(90%)'
                        }}
                    >
                    </div>
                    <div className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20">
                        <div className="relative">
                            <div className="bg-primary/90 backdrop-blur-sm text-white p-2 rounded-lg shadow-lg flex items-center gap-2 transform transition-transform group-hover:scale-110 border border-white/20">
                                <span className="material-symbols-outlined text-lg">warning</span>
                                <span className="text-xs font-bold whitespace-nowrap hidden group-hover:block">Pothole on Main St</span>
                            </div>
                            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-primary/90 absolute left-1/2 -translate-x-1/2 -bottom-2"></div>
                        </div>
                    </div>
                    {/* More map markers... */}
                </div>
            </main>
        </div>
    );
}

import Link from "next/link";


export default function DashboardPage() {
    return (
        <div className="bg-fixed bg-gradient-to-br from-[#e0e7ff] via-[#f0f4ff] to-[#e6f0ff] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] min-h-screen flex flex-col font-display antialiased text-[#111418] dark:text-gray-100 transition-colors duration-200 selection:bg-primary selection:text-white">
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-3xl"></div>
                <div className="absolute top-[20%] right-[10%] w-[20rem] h-[20rem] rounded-full bg-cyan-300/20 dark:bg-cyan-500/10 blur-3xl"></div>
            </div>
            <header className="sticky top-0 z-50 bg-white/70 dark:bg-[#1c2630]/70 backdrop-blur-md border-b border-white/20 dark:border-white/10 px-6 py-3 shadow-sm">
                <div className="mx-auto max-w-[1280px] flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-3 text-[#111418] dark:text-white">
                            <div className="size-8 text-primary flex items-center justify-center bg-blue-100/50 dark:bg-blue-900/30 rounded-full backdrop-blur-sm">
                                <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                            </div>
                            <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">CivicConnect</h2>
                        </Link>
                        <nav className="hidden md:flex items-center gap-1 bg-white/30 dark:bg-white/5 rounded-full px-2 py-1 backdrop-blur-sm border border-white/20 dark:border-white/5">
                            <Link className="text-primary bg-white/80 dark:bg-white/10 shadow-sm rounded-full px-4 py-1.5 font-bold text-sm leading-normal transition-all" href="/dashboard">Dashboard</Link>
                            <Link className="text-[#617589] dark:text-gray-400 hover:text-[#111418] dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5 px-4 py-1.5 rounded-full text-sm font-medium leading-normal transition-all" href="/dashboard?view=my_reports">My Reports</Link>
                            <Link className="text-[#617589] dark:text-gray-400 hover:text-[#111418] dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5 px-4 py-1.5 rounded-full text-sm font-medium leading-normal transition-all" href="/browse">Community</Link>
                            <Link className="text-[#617589] dark:text-gray-400 hover:text-[#111418] dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5 px-4 py-1.5 rounded-full text-sm font-medium leading-normal transition-all" href="/browse">Map View</Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex items-center bg-white/50 dark:bg-[#2a3441]/50 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-full h-10 px-3 w-64 shadow-inner focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                            <span className="material-symbols-outlined text-[#617589] dark:text-gray-400 text-[20px]">search</span>
                            <input className="bg-transparent border-none text-sm text-[#111418] dark:text-white placeholder-[#617589] dark:placeholder-gray-500 focus:ring-0 w-full" placeholder="Search reports..." />
                        </div>
                        <Link href="/report">
                            <button className="bg-primary/90 hover:bg-primary text-white h-10 px-4 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-primary/30 backdrop-blur-sm">
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                <span className="hidden sm:inline">New Report</span>
                            </button>
                        </Link>
                        <button className="size-10 flex items-center justify-center rounded-full bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 backdrop-blur-sm border border-white/40 dark:border-white/10 text-[#111418] dark:text-white transition-all relative shadow-sm">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1c2630] shadow-sm"></span>
                        </button>
                        <div className="size-10 rounded-full bg-cover bg-center cursor-pointer border-2 border-white/50 dark:border-white/10 shadow-md" data-alt="User profile picture of a smiling man" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDr-6IvXOKpIKWPWdT_uYildpQTiJ32kVdZRur-udTGsUEyXDENVMWkzBYXBA9bb7DAJ8ijiLwle9-wX2_rYzs-yQ93KnPzZ6ZuKGvwyax1PpKRnhD-QotMvFPQFVM5zHppBtY34rFJIRKgpUaKBIs8n9jel61uch8k9ohCnGa-Eo-wUjxQ8eRrN3ksOxsco8yDrDs6skYA8Y2zVm4ps3RE8Z1noJXzKWhgD5hkKyM0s0WIgz4NcTU0SFB-61FIUG3q2UzPlMQWFJ8")' }}></div>
                    </div>
                </div>
            </header>
            <main className="flex-1 px-4 sm:px-6 py-8 mx-auto w-full max-w-[1280px]">
                <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <h1 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] mb-2 drop-shadow-sm">Welcome back, Alex</h1>
                        <p className="text-[#617589] dark:text-gray-300 text-base font-normal">Here is the current status of your community contributions.</p>
                    </div>
                    <button className="flex items-center justify-center h-10 px-4 bg-white/60 dark:bg-white/5 backdrop-blur-md border border-white/40 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 rounded-lg text-[#111418] dark:text-white text-sm font-bold shadow-sm transition-all">
                        View Impact Report
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white/40 dark:bg-[#1c2630]/40 backdrop-blur-md rounded-2xl p-5 border border-white/50 dark:border-white/10 shadow-lg hover:shadow-xl hover:bg-white/50 dark:hover:bg-[#1c2630]/60 transition-all flex flex-col gap-1 group">
                        <div className="flex items-center gap-2 text-[#617589] dark:text-gray-300 mb-1">
                            <div className="p-1.5 rounded-lg bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[20px]">assignment</span>
                            </div>
                            <p className="text-sm font-medium">Total Reported</p>
                        </div>
                        <p className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight">12</p>
                    </div>
                    <div className="bg-white/40 dark:bg-[#1c2630]/40 backdrop-blur-md rounded-2xl p-5 border border-white/50 dark:border-white/10 shadow-lg hover:shadow-xl hover:bg-white/50 dark:hover:bg-[#1c2630]/60 transition-all flex flex-col gap-1 group">
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-1">
                            <div className="p-1.5 rounded-lg bg-green-100/50 dark:bg-green-900/30 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                            </div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Resolved</p>
                        </div>
                        <p className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight">8</p>
                    </div>
                    <div className="bg-white/40 dark:bg-[#1c2630]/40 backdrop-blur-md rounded-2xl p-5 border border-white/50 dark:border-white/10 shadow-lg hover:shadow-xl hover:bg-white/50 dark:hover:bg-[#1c2630]/60 transition-all flex flex-col gap-1 group">
                        <div className="flex items-center gap-2 text-primary dark:text-blue-400 mb-1">
                            <div className="p-1.5 rounded-lg bg-blue-100/50 dark:bg-blue-900/30 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[20px]">engineering</span>
                            </div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-300">In Progress</p>
                        </div>
                        <p className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight">2</p>
                    </div>
                    <div className="bg-white/40 dark:bg-[#1c2630]/40 backdrop-blur-md rounded-2xl p-5 border border-white/50 dark:border-white/10 shadow-lg hover:shadow-xl hover:bg-white/50 dark:hover:bg-[#1c2630]/60 transition-all flex flex-col gap-1 group">
                        <div className="flex items-center gap-2 text-orange-500 dark:text-orange-400 mb-1">
                            <div className="p-1.5 rounded-lg bg-orange-100/50 dark:bg-orange-900/30 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[20px]">pending</span>
                            </div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Pending Review</p>
                        </div>
                        <p className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight">2</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-6 items-center bg-white/30 dark:bg-[#1c2630]/30 backdrop-blur-md p-2 rounded-2xl border border-white/40 dark:border-white/10 shadow-sm">
                    <div className="relative flex-1 w-full md:w-auto">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#617589] dark:text-gray-400">search</span>
                        <input className="w-full bg-white/50 dark:bg-black/20 border border-white/30 dark:border-white/10 text-[#111418] dark:text-white rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all placeholder:text-gray-500 dark:placeholder:text-gray-500" placeholder="Search by keyword, ID, or location..." />
                    </div>
                    <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 px-2 md:px-0">
                        <div className="relative">
                            <select className="appearance-none bg-white/50 dark:bg-black/20 border border-white/30 dark:border-white/10 text-[#111418] dark:text-white rounded-xl pl-4 pr-10 py-3 focus:ring-2 focus:ring-primary/50 outline-none cursor-pointer min-w-[160px] transition-all">
                                <option className="dark:bg-[#1c2630]">All Statuses</option>
                                <option className="dark:bg-[#1c2630]">Resolved</option>
                                <option className="dark:bg-[#1c2630]">In Progress</option>
                                <option className="dark:bg-[#1c2630]">Pending</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-sm">expand_more</span>
                        </div>
                        <div className="relative">
                            <select className="appearance-none bg-white/50 dark:bg-black/20 border border-white/30 dark:border-white/10 text-[#111418] dark:text-white rounded-xl pl-4 pr-10 py-3 focus:ring-2 focus:ring-primary/50 outline-none cursor-pointer min-w-[160px] transition-all">
                                <option className="dark:bg-[#1c2630]">All Categories</option>
                                <option className="dark:bg-[#1c2630]">Infrastructure</option>
                                <option className="dark:bg-[#1c2630]">Sanitation</option>
                                <option className="dark:bg-[#1c2630]">Utilities</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-sm">expand_more</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <article className="bg-white/60 dark:bg-[#1c2630]/60 backdrop-blur-xl rounded-2xl border border-white/60 dark:border-white/10 overflow-hidden flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="relative h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYANKLhk32l1G-qN1Q-huv-3pjFNDJZ5R0yCZCWQpcm64QY3IZBlo2ujd44cSYBqwCQREsVuVvFV4mVWeX6gxxY166hnFLxOvnzAkPMJA5uxduaNLcDAWRb-azXEQ_RVl7MlRKPmkOFppel7hPWacRcnjOalC8bHnoLiQUAWN3_Xd-_ennJsbq_s6OZCzecD8pwTJJZLVLqVqeda7LytudMxYMEPWtGWBuqqGmKL3DgzefPork5LARlJgLQ-EO6UBu-e01VIkkWWU")' }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-3 left-3 bg-white/80 dark:bg-[#1c2630]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-white/50 dark:border-white/10 flex items-center gap-1.5 text-gray-800 dark:text-gray-100">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                In Progress
                            </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1 relative">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="text-xs font-bold text-primary dark:text-blue-400 uppercase tracking-wider mb-1 bg-primary/10 dark:bg-primary/20 inline-block px-2 py-0.5 rounded-md">Infrastructure</p>
                                    <h3 className="text-lg font-bold text-[#111418] dark:text-white leading-tight mt-1">Large Pothole on 5th Ave</h3>
                                </div>
                                <span className="text-xs font-medium text-[#617589] dark:text-gray-400 whitespace-nowrap bg-white/50 dark:bg-white/10 px-2 py-1 rounded-lg">Oct 10, 2023</span>
                            </div>
                            <p className="text-sm text-[#617589] dark:text-gray-300 mb-4 line-clamp-2">The pothole is causing traffic slowdowns and is dangerous for cyclists. Located near the central park entrance.</p>
                            <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/10">
                                <div className="flex items-center justify-between text-xs font-medium text-[#617589] dark:text-gray-400 mb-2">
                                    <span>Progress</span>
                                    <span className="text-primary font-bold">Crew Scheduled</span>
                                </div>
                                <div className="flex items-center gap-1 h-1.5 w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                                    <div className="h-full bg-primary rounded-full flex-1 shadow-[0_0_10px_rgba(19,127,236,0.5)]"></div>
                                    <div className="h-full bg-primary rounded-full flex-1 shadow-[0_0_10px_rgba(19,127,236,0.5)]"></div>
                                    <div className="h-full bg-primary rounded-full flex-1 shadow-[0_0_10px_rgba(19,127,236,0.5)]"></div>
                                    <div className="h-full bg-transparent flex-1"></div>
                                </div>
                                <div className="mt-4 flex gap-3">
                                    <button className="flex-1 bg-white/50 dark:bg-white/5 hover:bg-primary hover:text-white dark:hover:bg-primary border border-white/40 dark:border-white/10 text-[#111418] dark:text-white text-sm font-bold py-2 rounded-xl transition-all shadow-sm">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="bg-white/60 dark:bg-[#1c2630]/60 backdrop-blur-xl rounded-2xl border border-white/60 dark:border-white/10 overflow-hidden flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="relative h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoZMmNMgejGNCu7B5HiFSY5qQwu-11y0X20myy7Fi37Kvy6JhkROxbvdg76XYD7-83PtN4hthh5thy-2jvnhvIgWeP3YwXju-MAWo2Nl51dP-V9eaI6j2ZxDNT0Y-0IwM1o9uWyfi6e7FG09KFtVQgZGj8i7svo6cffOAjlC6D1pMCPbPmAp1wR37GPwLU54Ai34zgpVJnOcuadLRgSln8nmQ6JGMjM0UDDittofEA-O4kcbabnXClsgWgAT5YNwI33svq_2nuO_g")' }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-3 left-3 bg-white/80 dark:bg-[#1c2630]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-white/50 dark:border-white/10 flex items-center gap-1.5 text-gray-800 dark:text-gray-100">
                                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                Resolved
                            </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1 relative">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-1 bg-green-100/50 dark:bg-green-900/30 inline-block px-2 py-0.5 rounded-md">Electrical</p>
                                    <h3 className="text-lg font-bold text-[#111418] dark:text-white leading-tight mt-1">Streetlight Outage</h3>
                                </div>
                                <span className="text-xs font-medium text-[#617589] dark:text-gray-400 whitespace-nowrap bg-white/50 dark:bg-white/10 px-2 py-1 rounded-lg">Sep 28, 2023</span>
                            </div>
                            <p className="text-sm text-[#617589] dark:text-gray-300 mb-4 line-clamp-2">Streetlight #452 is completely out. It's very dark at this corner.</p>
                            <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/10">
                                <div className="flex items-center justify-between text-xs font-medium text-[#617589] dark:text-gray-400 mb-2">
                                    <span>Progress</span>
                                    <span className="text-green-600 dark:text-green-400 font-bold">Fixed on Oct 01</span>
                                </div>
                                <div className="flex items-center gap-1 h-1.5 w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                                    <div className="h-full bg-green-500 rounded-full flex-1 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                    <div className="h-full bg-green-500 rounded-full flex-1 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                    <div className="h-full bg-green-500 rounded-full flex-1 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                    <div className="h-full bg-green-500 rounded-full flex-1 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                </div>
                                <div className="mt-4 flex gap-3">
                                    <button className="flex-1 bg-white/50 dark:bg-white/5 hover:bg-primary hover:text-white dark:hover:bg-primary border border-white/40 dark:border-white/10 text-[#111418] dark:text-white text-sm font-bold py-2 rounded-xl transition-all shadow-sm">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="bg-white/60 dark:bg-[#1c2630]/60 backdrop-blur-xl rounded-2xl border border-white/60 dark:border-white/10 overflow-hidden flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="relative h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4bXERpXkNA7rlNidUNafsclzXOFEDTARHFcO6QZ2uUrNig7SUeLyn4Ul9_pkpaC4i6u3mrgxWIxPhFm5Pub8rr5ZrcV22WWyqkdlqTgp0f9xZXyt8QTfLSUIYtHShBY-xhBsXL8qUm21p68vUuGeiMkPOgNg7UR7M2AWlxP2BNptxm9wJMW4zMDdLZtjj96qFoJVUAPSg7BXKoVXXnYTVQJpQt1Xh4ClBfxRdaH06e0mykqAKYjPKGcxcJbGtYextHH2zx2M6xSU")' }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-3 left-3 bg-white/80 dark:bg-[#1c2630]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-white/50 dark:border-white/10 flex items-center gap-1.5 text-gray-800 dark:text-gray-100">
                                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                                Pending Review
                            </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1 relative">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-1 bg-orange-100/50 dark:bg-orange-900/30 inline-block px-2 py-0.5 rounded-md">Sanitation</p>
                                    <h3 className="text-lg font-bold text-[#111418] dark:text-white leading-tight mt-1">Illegal Dumping at Parkside</h3>
                                </div>
                                <span className="text-xs font-medium text-[#617589] dark:text-gray-400 whitespace-nowrap bg-white/50 dark:bg-white/10 px-2 py-1 rounded-lg">Oct 12, 2023</span>
                            </div>
                            <p className="text-sm text-[#617589] dark:text-gray-300 mb-4 line-clamp-2">Found a large pile of construction debris left on the sidewalk overnight.</p>
                            <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/10">
                                <div className="flex items-center justify-between text-xs font-medium text-[#617589] dark:text-gray-400 mb-2">
                                    <span>Progress</span>
                                    <span className="text-orange-500 dark:text-orange-400 font-bold">Received</span>
                                </div>
                                <div className="flex items-center gap-1 h-1.5 w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                                    <div className="h-full bg-orange-400 rounded-full flex-1 shadow-[0_0_10px_rgba(251,146,60,0.5)]"></div>
                                    <div className="h-full bg-transparent flex-1"></div>
                                    <div className="h-full bg-transparent flex-1"></div>
                                    <div className="h-full bg-transparent flex-1"></div>
                                </div>
                                <div className="mt-4 flex gap-3">
                                    <button className="flex-1 bg-white/50 dark:bg-white/5 hover:bg-primary hover:text-white dark:hover:bg-primary border border-white/40 dark:border-white/10 text-[#111418] dark:text-white text-sm font-bold py-2 rounded-xl transition-all shadow-sm">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="mt-8 flex justify-center">
                    <button className="bg-white/50 dark:bg-[#1c2630]/50 backdrop-blur-sm border border-white/40 dark:border-white/10 hover:bg-white/80 dark:hover:bg-[#1c2630]/80 text-primary dark:text-blue-400 font-bold text-sm flex items-center gap-2 transition-all px-6 py-2.5 rounded-full shadow-sm hover:shadow-md">
                        Load More Reports
                        <span className="material-symbols-outlined text-[18px]">expand_more</span>
                    </button>
                </div>
            </main>
        </div>
    );
}

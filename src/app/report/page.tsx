import Link from "next/link";

export default function ReportPage() {
    return (
        <div className="bg-fixed bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 font-display text-text-main-light dark:text-text-main-dark overflow-x-hidden min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/80 backdrop-blur-lg border-b border-white/20 dark:border-white/5 px-4 py-3 lg:px-10 shadow-sm">
                <div className="layout-content-container mx-auto flex max-w-[960px] items-center justify-between">
                    <Link href="/" className="flex items-center gap-4">
                        <div className="size-8 text-primary drop-shadow-sm">
                            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_6_330)">
                                    <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_6_330"><rect height="48" width="48"></rect></clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">CivicConnect</h2>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex items-center gap-6">
                            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/">Home</Link>
                            <Link className="text-sm font-medium text-primary" href="/report">Report Issue</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/dashboard">My Reports</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/browse">Community Data</Link>
                        </nav>
                        <Link href="/login">
                            <button className="flex h-10 items-center justify-center rounded-lg bg-primary/90 hover:bg-primary backdrop-blur-sm px-4 text-sm font-bold text-white transition-all hover:shadow-lg hover:shadow-blue-500/30 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                                Login
                            </button>
                        </Link>
                    </div>
                    <button className="md:hidden text-text-main-light dark:text-text-main-dark">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </header>
            <main className="flex-1 flex justify-center py-8 px-4 md:px-8">
                <div className="flex w-full max-w-[960px] flex-col gap-6">
                    <div className="rounded-2xl border border-amber-200/50 bg-amber-50/60 dark:bg-amber-900/20 backdrop-blur-md p-5 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 text-amber-500 drop-shadow-sm">
                                    <span className="material-symbols-outlined text-[32px]">warning</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-base font-bold leading-tight text-amber-700 dark:text-amber-500">Non-Emergency Use Only</p>
                                    <p className="text-text-sec-light dark:text-text-sec-dark text-sm leading-normal">
                                        This form is for non-emergency civic issues. If this is a life-threatening emergency, please dial 911 immediately.
                                    </p>
                                </div>
                            </div>
                            <a className="flex items-center gap-2 text-sm font-bold text-primary hover:underline whitespace-nowrap" href="#">
                                Emergency Info
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 pb-2">
                        <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] drop-shadow-sm">Report a Civic Issue</h1>
                        <p className="text-text-sec-light dark:text-text-sec-dark text-lg leading-normal max-w-2xl">
                            Help us improve our community by reporting problems like potholes, graffiti, or broken streetlights.
                        </p>
                    </div>
                    <section className="glass-panel rounded-2xl p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm text-primary font-bold text-sm shadow-inner">1</div>
                            <h2 className="text-xl font-bold">Select Category</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            <button className="group flex flex-col items-center gap-3 rounded-xl border-2 border-primary/60 bg-primary/10 backdrop-blur-sm p-4 transition-all shadow-lg shadow-blue-500/10">
                                <div className="text-primary drop-shadow-sm">
                                    <span className="material-symbols-outlined text-[32px]">edit_road</span>
                                </div>
                                <h3 className="text-sm font-bold text-primary">Pothole</h3>
                            </button>
                            <button className="group flex flex-col items-center gap-3 rounded-xl border border-white/40 dark:border-white/10 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm p-4 transition-all hover:bg-white/60 dark:hover:bg-slate-700/60 hover:border-primary/50 hover:shadow-md hover:-translate-y-1">
                                <div className="text-text-sec-light dark:text-text-sec-dark group-hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[32px]">lightbulb</span>
                                </div>
                                <h3 className="text-sm font-bold group-hover:text-primary transition-colors">Street Light</h3>
                            </button>
                            <button className="group flex flex-col items-center gap-3 rounded-xl border border-white/40 dark:border-white/10 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm p-4 transition-all hover:bg-white/60 dark:hover:bg-slate-700/60 hover:border-primary/50 hover:shadow-md hover:-translate-y-1">
                                <div className="text-text-sec-light dark:text-text-sec-dark group-hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[32px]">delete</span>
                                </div>
                                <h3 className="text-sm font-bold group-hover:text-primary transition-colors">Sanitation</h3>
                            </button>
                            <button className="group flex flex-col items-center gap-3 rounded-xl border border-white/40 dark:border-white/10 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm p-4 transition-all hover:bg-white/60 dark:hover:bg-slate-700/60 hover:border-primary/50 hover:shadow-md hover:-translate-y-1">
                                <div className="text-text-sec-light dark:text-text-sec-dark group-hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[32px]">format_paint</span>
                                </div>
                                <h3 className="text-sm font-bold group-hover:text-primary transition-colors">Graffiti</h3>
                            </button>
                            <button className="group flex flex-col items-center gap-3 rounded-xl border border-white/40 dark:border-white/10 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm p-4 transition-all hover:bg-white/60 dark:hover:bg-slate-700/60 hover:border-primary/50 hover:shadow-md hover:-translate-y-1">
                                <div className="text-text-sec-light dark:text-text-sec-dark group-hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[32px]">directions_bus</span>
                                </div>
                                <h3 className="text-sm font-bold group-hover:text-primary transition-colors">Transport</h3>
                            </button>
                            <button className="group flex flex-col items-center gap-3 rounded-xl border border-white/40 dark:border-white/10 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm p-4 transition-all hover:bg-white/60 dark:hover:bg-slate-700/60 hover:border-primary/50 hover:shadow-md hover:-translate-y-1">
                                <div className="text-text-sec-light dark:text-text-sec-dark group-hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[32px]">more_horiz</span>
                                </div>
                                <h3 className="text-sm font-bold group-hover:text-primary transition-colors">Other</h3>
                            </button>
                        </div>
                    </section>
                    <section className="glass-panel rounded-2xl p-6 md:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm text-primary font-bold text-sm shadow-inner">2</div>
                                <h2 className="text-xl font-bold">Location</h2>
                            </div>
                            <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline decoration-2 underline-offset-4">
                                <span className="material-symbols-outlined text-[18px]">my_location</span>
                                Use current location
                            </button>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="relative w-full lg:w-1/2 h-64 lg:h-auto min-h-[250px] rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 group cursor-pointer shadow-inner border border-white/30 dark:border-white/5">
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity"
                                    style={{
                                        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADG4Sl7dWslrng9vsAsTPZgCvGVppXRoB-PhE0M0mye-_gIA0GdOs6acRbzJtofoUkroGFAqPzRgI9duD7CWmfByIKqJJlikSn4TMIJGiYFILO_qZ0h0UgZGTeH_kUtTOesDQvEBpsNF5l_8YE6BUVX4GBnczf0LLLRuRlahzVsyG9qXVQIAVTJKlVSMhVYOIACqcmGaN3AOeluaq9EsxRSyqkEnR9c7PAXP6HXOa9HkbldZWsIAk57x7cxDJ7yUhlxVmMDB4KTws")',
                                        opacity: 0.8
                                    }}
                                ></div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="bg-primary/90 backdrop-blur-sm text-white p-2 rounded-full shadow-lg transform -translate-y-1/2 ring-4 ring-white/30">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold shadow-sm border border-white/50">
                                    Click to adjust pin
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 gap-5 justify-center">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-bold text-text-sec-light dark:text-text-sec-dark ml-1">Street Address</label>
                                    <input className="glass-input w-full h-11 rounded-lg px-4 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="e.g. 123 Main St" type="text" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-bold text-text-sec-light dark:text-text-sec-dark ml-1">City/Area</label>
                                        <input className="glass-input w-full h-11 rounded-lg px-4 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="City" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-bold text-text-sec-light dark:text-text-sec-dark ml-1">Postal Code</label>
                                        <input className="glass-input w-full h-11 rounded-lg px-4 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="Zip Code" type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-bold text-text-sec-light dark:text-text-sec-dark ml-1">Landmark (Optional)</label>
                                    <input className="glass-input w-full h-11 rounded-lg px-4 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="e.g. Near the park entrance" type="text" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="grid lg:grid-cols-2 gap-6">
                        <section className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm text-primary font-bold text-sm shadow-inner">3</div>
                                <h2 className="text-xl font-bold">Description</h2>
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <textarea className="glass-input w-full flex-1 min-h-[160px] rounded-xl p-4 text-sm resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="Please describe the issue in detail. The more information you provide, the faster we can resolve it."></textarea>
                                <p className="text-xs text-text-sec-light dark:text-text-sec-dark text-right font-medium">0/1000 characters</p>
                            </div>
                        </section>
                        <section className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm text-primary font-bold text-sm shadow-inner">4</div>
                                <h2 className="text-xl font-bold">Evidence</h2>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/50 dark:border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-sm p-6 transition-all hover:bg-white/40 dark:hover:bg-slate-700/40 hover:border-primary/50 cursor-pointer group">
                                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[28px]">cloud_upload</span>
                                </div>
                                <p className="text-sm font-bold text-center mb-1 text-text-main-light dark:text-white">Click to upload or drag and drop</p>
                                <p className="text-xs text-text-sec-light dark:text-text-sec-dark text-center">SVG, PNG, JPG or MP4 (max. 10MB)</p>
                            </div>
                            <div className="mt-4 flex items-center justify-between rounded-xl border border-white/40 dark:border-white/10 p-3 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-700 overflow-hidden shadow-inner border border-white/20">
                                        <div
                                            className="w-full h-full bg-cover bg-center"
                                            style={{
                                                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzgsqdJ6H2LOntr_6YDHMOlk9yBEGIuOWzl5fYT3s0kDxWqVqTIBSj7TF_Rbi6j2vtWp6C8HzMHH3t_eK28ptr3jY0bKpiEkjchGFqSdiHGfVFAG3-ERKC1KVX7v-pmMjB8HZASNV7AoULnWoAyTFGVRLr3UpPQRnFlfUGUs4ADV2vdeglUjCSZafdIlhgZ8PkccGk8xE3UVO-r1KjswvKUW5tUI-aZJlwYcUX9WdpAgK7OrW8XxlTEHBSZKSWaCt_FKv9soxWGeA")'
                                            }}
                                        ></div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold line-clamp-1">pothole_main_st.jpg</span>
                                        <span className="text-xs text-text-sec-light dark:text-text-sec-dark">2.4 MB</span>
                                    </div>
                                </div>
                                <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-red-50 text-text-sec-light hover:text-red-500 transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">close</span>
                                </button>
                            </div>
                        </section>
                    </div>
                    <section className="glass-panel rounded-2xl p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm text-primary font-bold text-sm shadow-inner">5</div>
                                <h2 className="text-xl font-bold">Contact Information</h2>
                            </div>
                            <label className="inline-flex items-center cursor-pointer group">
                                <input className="sr-only peer" type="checkbox" value="" />
                                <div className="relative w-11 h-6 bg-gray-300/60 dark:bg-gray-700/60 backdrop-blur-sm peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300/50 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary shadow-inner"></div>
                                <span className="ms-3 text-sm font-bold text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">Submit Anonymously</span>
                            </label>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-text-sec-light dark:text-text-sec-dark ml-1">Full Name</label>
                                <input className="glass-input w-full h-11 rounded-lg px-4 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="John Doe" type="text" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-text-sec-light dark:text-text-sec-dark ml-1">Email Address</label>
                                <input className="glass-input w-full h-11 rounded-lg px-4 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="john@example.com" type="email" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-text-sec-light dark:text-text-sec-dark ml-1">Phone Number</label>
                                <input className="glass-input w-full h-11 rounded-lg px-4 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="(555) 123-4567" type="tel" />
                            </div>
                            <div className="flex flex-col gap-2 pt-6">
                                <p className="text-xs text-text-sec-light dark:text-text-sec-dark">
                                    By submitting this report, you agree to our <a className="text-primary hover:underline font-medium" href="#">Terms of Service</a> and <a className="text-primary hover:underline font-medium" href="#">Privacy Policy</a>.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="sticky bottom-4 z-40 mt-4 flex flex-col-reverse md:flex-row items-center justify-end gap-4 rounded-2xl border border-white/40 dark:border-white/10 bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl p-4 shadow-2xl">
                        <button className="w-full md:w-auto px-6 h-11 rounded-lg border border-white/40 dark:border-white/10 bg-white/30 dark:bg-slate-800/30 text-text-main-light dark:text-text-main-dark font-bold text-sm hover:bg-white/60 dark:hover:bg-slate-700/60 transition-colors backdrop-blur-sm">
                            Save Draft
                        </button>
                        <div className="flex w-full md:w-auto gap-4">
                            <button className="w-full md:w-auto px-6 h-11 rounded-lg border border-transparent text-text-sec-light dark:text-text-sec-dark font-bold text-sm hover:text-text-main-light dark:hover:text-white transition-colors">
                                Cancel
                            </button>
                            <button className="w-full md:w-auto px-8 h-11 rounded-lg bg-primary/90 text-white font-bold text-sm hover:bg-primary hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all transform active:scale-95 backdrop-blur-sm border border-white/20 shadow-blue-500/20 shadow-md">
                                Submit Report
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="mt-12 border-t border-white/20 dark:border-white/5 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md py-8 text-center">
                <div className="px-4">
                    <p className="text-sm font-medium text-text-sec-light dark:text-text-sec-dark">© 2023 CivicConnect. All rights reserved.</p>
                    <div className="mt-4 flex justify-center gap-6">
                        <a className="text-sm text-text-sec-light dark:text-text-sec-dark hover:text-primary transition-colors" href="#">Help Center</a>
                        <a className="text-sm text-text-sec-light dark:text-text-sec-dark hover:text-primary transition-colors" href="#">Accessibility</a>
                        <a className="text-sm text-text-sec-light dark:text-text-sec-dark hover:text-primary transition-colors" href="#">Contact Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

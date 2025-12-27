import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="font-display text-[#111418] dark:text-white antialiased h-screen w-full overflow-hidden relative">
            <div className="absolute inset-0 z-0">
                <div
                    className="h-full w-full bg-cover object-cover"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0sK7mHx61bhcmf2TufLywIm80RsTkFZZE5-tUx5lVL5NIv_TZC1wdr01kCqJOVtBPUzD1kGqXmif53qf2vqbDIawEM6nGIBC258cJKx0BXiaqySXUgnnA62M4g3cEqlT3-WsGB1_TzEfqByeKpPclraLxOvRcDw7T6RvaWNMG3QfBDOlb-MfnQPr8pzXcahyJ6HdLHgRyC-VXyd8J8OAjITY1ROb3T0kp6CHdEMWqhUlckb09HqF0CLH95UuWNw0mjtfTCTJ8zHM")' }}
                ></div>
                <div className="absolute inset-0 bg-[#0f172a]/40 mix-blend-multiply backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b]/80 via-[#137fec]/20 to-[#1e293b]/60"></div>
            </div>
            <div className="relative z-10 flex w-full h-full">
                <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 xl:p-20 text-white h-full">
                    <Link href="/" className="flex items-center gap-4">
                        <div className="size-10 text-white drop-shadow-md">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                                <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] drop-shadow-md">Civic Voice</h2>
                    </Link>
                    <div className="max-w-[480px]">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight drop-shadow-lg">Report. Resolve. Improve.</h1>
                        <p className="text-lg text-white/90 leading-relaxed font-medium drop-shadow-md">Join thousands of citizens making their community better. Report issues, track progress, and see the change happening in real-time.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            <div className="inline-block size-8 rounded-full ring-2 ring-white overflow-hidden shadow-lg bg-gray-300">
                                <img alt="User portrait" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxtBu79Q8kofZYUMcueHek_N7Bag8hnqoTmWnZoe7mY4nYJqENWSijKvvGDUoVCZX6rEZJ5u5O5jbcgjL3_w_ZJ8vIV9MaqbbAZVO1h3Q1zfLE21q714Ialujken_HgRH-F-Pc1DyA5TmVjHQQ9tWc5ai_xBIaWQtNevJ2yGdJORW942OGUSKKYGZRw2FHkgiFoaTprhE2G27F8KdAHBcYkuzTTe6MXj497p0KP1JG490J1F24jY5eE6_8QLX7-tKhtKO-9y8C1QQ" />
                            </div>
                            <div className="inline-block size-8 rounded-full ring-2 ring-white overflow-hidden shadow-lg bg-gray-300">
                                <img alt="User portrait" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNCOQhNaTYgaLKpLDbUxtQNND72zEdcnw0j5OxvPSZP1L79akU3w8puaRV0h_vq0pT_sve5SKd-br-a69iN_RIktpg3AlJIf0Jwy_Wcxqwxq1BxOgLY_SNWiFD43t520uimdgsPLbgyhDAq55XchAhc83SAbeNB4x-EBlSpJzp5gZ82XL-yUudVUIkr0NwQvpivzYmkmX0hx3jXgsHv9dl1-5hbWHPfz4gTvSdQy3SaSJ2DxI8EQp31bdIZv62Lm7Jp01wdif1J5w" />
                            </div>
                            <div className="inline-block size-8 rounded-full ring-2 ring-white overflow-hidden shadow-lg bg-gray-300">
                                <img alt="User portrait" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzWngAhar07KHkiebVkNqonWqQqLnolnxl5X3UWui50b08fFqZ9Vl-U1MdiPNg_2MqGUe_1UyyS7jT-HKI72zFLDxSzyB5Sin6LLb-dme25EZLCMTl0-Ta1DPgob_hZTRQ8q8ft1_yrVgnkAXv6qcwbEdIit5R2yUfLslizGIE6F6mpr6F-4fTsBHv2AaUOlyaq6QqykAmVemAIowX_YwI6AjPy51vGI4DQ_zh5yEAKQfe2bylYNMi11SDuSzc53xhCS7s_BZ3nFE" />
                            </div>
                        </div>
                        <p className="text-sm font-medium text-white/90 drop-shadow-md">Trusted by 10,000+ citizens</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
                    <div className="w-full max-w-md flex flex-col gap-6 backdrop-blur-xl bg-white/70 dark:bg-black/60 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] border border-white/40 dark:border-white/10 p-8 sm:p-10 transition-all duration-300">
                        <div className="mb-2">
                            <h1 className="text-3xl font-bold tracking-tight text-[#111418] dark:text-white mb-2">Welcome Back</h1>
                            <p className="text-[#617589] dark:text-gray-300 text-base">Select your role and sign in to continue.</p>
                        </div>
                        <div className="flex w-full p-1 bg-gray-200/40 dark:bg-black/20 rounded-xl backdrop-blur-sm border border-white/20">
                            <label className="flex-1 cursor-pointer">
                                <input defaultChecked className="peer sr-only" name="auth-mode" type="radio" value="login" />
                                <div className="flex items-center justify-center py-2.5 px-4 rounded-lg text-sm font-bold transition-all text-gray-600 dark:text-gray-400 peer-checked:bg-white dark:peer-checked:bg-white/10 peer-checked:text-[#111418] dark:peer-checked:text-white peer-checked:shadow-sm">
                                    Log In
                                </div>
                            </label>
                            <label className="flex-1 cursor-pointer">
                                <input className="peer sr-only" name="auth-mode" type="radio" value="register" />
                                <div className="flex items-center justify-center py-2.5 px-4 rounded-lg text-sm font-bold transition-all text-gray-600 dark:text-gray-400 peer-checked:bg-white dark:peer-checked:bg-white/10 peer-checked:text-[#111418] dark:peer-checked:text-white peer-checked:shadow-sm">
                                    Sign Up
                                </div>
                            </label>
                        </div>
                        <div>
                            <span className="block text-xs font-bold text-[#617589] dark:text-gray-400 uppercase tracking-wider mb-2">Login as</span>
                            <div className="flex space-x-1 border-b border-[#dbe0e6]/50 dark:border-white/10">
                                <button className="flex-1 pb-3 border-b-2 border-primary text-primary font-bold text-sm transition-all text-center">Public User</button>
                                <Link href="/officer" className="flex-1 pb-3 border-b-2 border-transparent text-[#617589] dark:text-gray-400 font-medium text-sm hover:text-[#111418] dark:hover:text-white hover:border-gray-300/50 transition-all text-center">Officer</Link>
                                <button className="flex-1 pb-3 border-b-2 border-transparent text-[#617589] dark:text-gray-400 font-medium text-sm hover:text-[#111418] dark:hover:text-white hover:border-gray-300/50 transition-all text-center">Technician</button>
                            </div>
                        </div>
                        <form className="flex flex-col gap-5 w-full mt-2" action="/dashboard">
                            <label className="flex flex-col gap-2">
                                <span className="text-[#111418] dark:text-gray-200 text-sm font-medium">Email Address or Username</span>
                                <div className="relative">
                                    <input className="w-full h-12 px-4 rounded-xl bg-white/50 dark:bg-black/20 border border-white/50 dark:border-white/10 text-[#111418] dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all text-base backdrop-blur-sm" placeholder="name@example.com" required type="email" />
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-[20px]">mail</span>
                                </div>
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-[#111418] dark:text-gray-200 text-sm font-medium">Password</span>
                                <div className="relative group">
                                    <input className="w-full h-12 px-4 pr-12 rounded-xl bg-white/50 dark:bg-black/20 border border-white/50 dark:border-white/10 text-[#111418] dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all text-base backdrop-blur-sm" placeholder="Enter your password" required type="password" />
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-[20px] cursor-pointer hover:text-[#111418] dark:hover:text-white">visibility</span>
                                </div>
                            </label>
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input className="size-4 rounded border-gray-300/50 text-primary focus:ring-primary/20 bg-white/50 dark:bg-black/20 dark:border-white/10" type="checkbox" />
                                    <span className="text-sm text-[#617589] dark:text-gray-300 font-medium">Remember me</span>
                                </label>
                                <a className="text-sm font-bold text-primary hover:text-blue-700 hover:underline" href="#">Forgot Password?</a>
                            </div>
                            <button className="flex items-center justify-center w-full h-12 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/40 mt-2 backdrop-blur-md">
                                Log In
                            </button>
                        </form>
                        <div className="relative flex items-center justify-between gap-4 py-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                            <span className="text-sm text-[#617589] dark:text-gray-400 font-medium">Or continue with</span>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-3 h-12 rounded-xl border border-white/40 dark:border-white/10 hover:bg-white/40 dark:hover:bg-white/5 transition-colors bg-white/30 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-md">
                                <img alt="Google Logo" className="size-5" data-alt="Google G logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF6B6_wdmnz2c-AtKPsOyxB5-Fh_aaYfa9nmqf39XGMwiLr79qnVyQ_rwbKeNfYhwXDqtHRjGPe0hK_fVOyJPAqSKfzfnPU-bqc7vYXkfa6MwP-GXEVHKevpnz6KjHIpNmgxBhFhDzM1M2VP91qv7ktKqAvH9kTszameMwU7MYNW_0ZAi9KV9DAbgQkYDxGXqAmzrFJhNta0K7LNr2w4Ct0DeuFl65ugYfBroZBhGKXkIjSa5N1Bg-8aqrW_2IcPDYM2_LXZLxkTo" />
                                <span className="text-sm font-bold text-[#111418] dark:text-white">Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-3 h-12 rounded-xl border border-white/40 dark:border-white/10 hover:bg-white/40 dark:hover:bg-white/5 transition-colors bg-white/30 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-md">
                                <span className="material-symbols-outlined text-2xl dark:text-white">ios</span>
                                <span className="text-sm font-bold text-[#111418] dark:text-white">Apple</span>
                            </button>
                        </div>
                        <p className="text-center text-xs text-[#617589] dark:text-gray-400 mt-4 leading-relaxed max-w-xs mx-auto">
                            By logging in, you agree to our <a className="underline hover:text-[#111418] dark:hover:text-white" href="#">Terms of Service</a> and <a className="underline hover:text-[#111418] dark:hover:text-white" href="#">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

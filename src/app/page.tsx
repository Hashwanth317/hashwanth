import Link from "next/link";


export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden z-10 bg-slate-50 dark:bg-slate-900 font-display text-[#111418] dark:text-white antialiased selection:bg-primary/30 selection:text-primary">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="bg-blob bg-blue-300 dark:bg-blue-900 -top-40 -left-40 animate-pulse"></div>
        <div className="bg-blob bg-purple-300 dark:bg-purple-900 bottom-0 right-0"></div>
        <div className="bg-blob bg-teal-200 dark:bg-teal-900 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      </div>

      <header className="glass-panel sticky top-0 z-50 border-b border-white/20 dark:border-gray-800/50">
        <div className="layout-container flex justify-center">
          <div className="px-4 md:px-10 flex flex-1 max-w-[960px] py-3 items-center justify-between">
            <div className="flex items-center gap-4 text-[#111418] dark:text-white">
              <div className="size-8 text-primary drop-shadow-sm">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                  <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">CivicFix</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <div className="hidden md:flex items-center gap-9">
                <Link className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">About</Link>
                <Link className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="/browse">Map</Link>
                <Link className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="/dashboard">Statistics</Link>
                <Link className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="/login">Log In</Link>
              </div>
              <Link href="/login">
                <button className="glass-button flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 hover:brightness-110 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all">
                  <span className="truncate">Sign Up</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="layout-container flex grow flex-col">
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <section className="@container mb-10">
              <div className="glass-card rounded-2xl flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row items-center border border-white/40 dark:border-gray-700/30">
                <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center flex-1 pl-4 md:pl-8">
                  <div className="flex flex-col gap-4 text-left">
                    <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] drop-shadow-sm">
                      Better Neighborhoods start with you
                    </h1>
                    <h2 className="text-[#405466] dark:text-gray-300 text-lg font-normal leading-normal">
                      Report potholes, broken streetlights, or illegal dumping in seconds. Track the progress and see your city improve.
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/report">
                      <button className="glass-button flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 hover:scale-105 active:scale-95 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg">
                        <span className="truncate">Report an Issue</span>
                      </button>
                    </Link>
                    <Link href="/browse">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white/50 dark:bg-gray-800/50 hover:bg-white/70 dark:hover:bg-gray-700/70 text-[#111418] dark:text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors border border-white/40 dark:border-gray-600/30 backdrop-blur-sm">
                        <span className="truncate">Explore the Map</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-full bg-center bg-no-repeat bg-cover rounded-xl aspect-[4/3] @[864px]:w-1/2 shadow-xl border-4 border-white/20 dark:border-gray-800/20" data-alt="Illustration of happy diverse citizens cleaning a park and fixing a bench" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcyaukbB6QUw6Y63X6yO553afPncq6-UQ1Xi694L5bzWPM7FnAw6nunBXwUF2a92QaErmYu5vUoMTZ5l1e06Rx9kpyCO3FZdRrC0w4DcfWhAhrwXCVOCPycb8QbjAQZpdkZsl7OClF7c7rcJ4zLFk4V6fMJjAvAjx6vZr6ybIHkmHfhKhFSTP9C7HHSskn5k30TbHjz6S80gBleBkmsjn8C5ZegQbguzraJKI3hmIEedGqztDWhlAzaD9MgtO_GDc_SBVtNgQx0cY")' }}>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-4 px-4 py-8 mb-8">
              <div className="glass-card rounded-xl p-6 shadow-md">
                <h3 className="text-[#111418] dark:text-white text-lg font-bold mb-4 drop-shadow-sm">Impact Dashboard</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-white/40 dark:bg-gray-800/40 border border-white/50 dark:border-gray-600/20 transition-transform hover:-translate-y-1 duration-300 backdrop-blur-sm shadow-sm">
                    <div className="flex items-center gap-2 text-primary">
                      <span className="material-symbols-outlined drop-shadow-md">check_circle</span>
                      <p className="text-[#111418] dark:text-white text-base font-medium leading-normal">Problems Solved</p>
                    </div>
                    <p className="text-[#111418] dark:text-white tracking-light text-3xl font-bold leading-tight drop-shadow-sm">1,240</p>
                  </div>
                  <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-white/40 dark:bg-gray-800/40 border border-white/50 dark:border-gray-600/20 transition-transform hover:-translate-y-1 duration-300 backdrop-blur-sm shadow-sm">
                    <div className="flex items-center gap-2 text-orange-500">
                      <span className="material-symbols-outlined drop-shadow-md">pending_actions</span>
                      <p className="text-[#111418] dark:text-white text-base font-medium leading-normal">Active Reports</p>
                    </div>
                    <p className="text-[#111418] dark:text-white tracking-light text-3xl font-bold leading-tight drop-shadow-sm">356</p>
                  </div>
                  <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-white/40 dark:bg-gray-800/40 border border-white/50 dark:border-gray-600/20 transition-transform hover:-translate-y-1 duration-300 backdrop-blur-sm shadow-sm">
                    <div className="flex items-center gap-2 text-green-600">
                      <span className="material-symbols-outlined drop-shadow-md">groups</span>
                      <p className="text-[#111418] dark:text-white text-base font-medium leading-normal">Citizens Engaged</p>
                    </div>
                    <p className="text-[#111418] dark:text-white tracking-light text-3xl font-bold leading-tight drop-shadow-sm">5,000+</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional content sections could go here */}

            <section className="flex flex-col gap-6 px-4 py-10">
              <div className="flex justify-between items-end px-2">
                <h2 className="text-[#111418] dark:text-white text-[28px] font-bold leading-tight drop-shadow-sm">Recent Activity</h2>
                <Link className="text-primary font-bold text-sm hover:underline" href="/browse">View All Reports</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-lg overflow-hidden glass-card shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="h-48 w-full bg-cover bg-center" data-alt="Image of a large pothole on a paved road" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcLhlN7-LdEsjBPaUPCivSMS2M7gIdvL3CRDDZmbWc3wOSM9ZlymNketWmwYaQfq3noSnwm_xiFjFWdRj97W3L53B82bKkXXLjxAFb90TAok46MzHwgwSrV43foiT5jRJ6vnd7aibDtBudpm_m_EN1aCYovCQBzZvc0dgKixjpkcK9P4eTXipJfICfT9jxzwEtXprgq34dQvvW9yV9uBn6Atm2e0I1wVpwKUkpoQfmeBAWiplEI3Yb6mK6k7Aene8tvMJls070clo')" }}></div>
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <span className="inline-flex items-center rounded-full bg-orange-100/80 dark:bg-orange-900/40 px-2 py-1 text-xs font-medium text-orange-700 dark:text-orange-300 ring-1 ring-inset ring-orange-600/20 backdrop-blur-sm">Pending Review</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">2h ago</span>
                    </div>
                    <h3 className="font-bold text-[#111418] dark:text-white text-lg">Pothole on Main St.</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-1">
                      <span className="material-symbols-outlined text-base">location_on</span>
                      <span>Downtown District</span>
                    </div>
                  </div>
                </div>
                {/* More cards can be added here */}
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className="glass-panel border-t border-white/20 dark:border-gray-800/50 relative z-20">
        <div className="layout-container flex justify-center py-10 px-4 md:px-40">
          <div className="layout-content-container max-w-[960px] flex-1 flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-xs">
              <div className="flex items-center gap-2 text-[#111418] dark:text-white">
                <div className="size-6 text-primary drop-shadow-sm">
                  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                    <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg font-bold">CivicFix</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Empowering citizens to build better neighborhoods, one report at a time.
              </p>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-sm uppercase text-[#111418] dark:text-white">Platform</h4>
                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">About</Link>
                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">How it works</Link>
                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="/browse">Map</Link>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-sm uppercase text-[#111418] dark:text-white">Support</h4>
                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Help Center</Link>
                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Report a Bug</Link>
                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Contact Municipal</Link>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-sm uppercase text-[#111418] dark:text-white">Legal</h4>
                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Privacy Policy</Link>
                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-4 border-t border-gray-200/50 dark:border-gray-800/50 text-xs text-gray-400">
          © 2023 CivicFix Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-black text-gray-400 py-16 mt-24 border-t border-gray-800">
        <div className="container mx-auto px-4">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Logo and Security Section */}
            <div className="lg:col-span-1">
              <img
                src="https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.dc768579.png&w=3840&q=100"
                alt="Kroolo"
                className="h-8 mb-6"
              />
              <div className="space-y-2">
                <h3 className="text-white text-lg font-medium">
                  Enterprise grade security
                </h3>
                <p>We are certified</p>
                <div className="flex space-x-4 mt-4">
                  <img
                    src="https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAicpaLogo.2ce146a5.png&w=128&q=100"
                    alt="AICPA SOC"
                    className="h-12 w-12 rounded-full"
                  />
                  <img
                    src="https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FISOlogo.7d3713bf.png&w=128&q=100"
                    alt="ISO 27001"
                    className="h-12 w-12 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kroolo AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Goal & OKRs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Project & Sprints
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tasks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Chats
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Teams
                  </a>
                </li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Product management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Engineering
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Project management
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Videos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>

            {/* Compare Column */}
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Compare</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    vs Asana
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    vs Basecamp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    vs Trello
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    vs Jira
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    vs Todoist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    vs Slack
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    vs Notion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    vs Smartsheet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    vs Monday
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    vs MS Project
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    vs ClickUp
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Book a Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/getkroolo/" className="text-gray-400 hover:text-white transition-colors">
                <img src="https://kroolo.com/_next/static/media/YoutubeIC.0bdc3959.svg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <img src="https://kroolo.com/_next/static/media/InstaGramIc.7b64b0ce.svg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <img src="https://kroolo.com/_next/static/media/FacebbokIC.5da0b94b.svg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <img src="https://kroolo.com/_next/static/media/TweeterIc.410cc1bc.svg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <img src="https://kroolo.com/_next/static/media/LinkedinIC.e66b35d4.svg" />
              </a>
            </div>

            {/* System Status */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>System Status</span>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

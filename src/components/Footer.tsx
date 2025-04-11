import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#172337] text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm">ABOUT</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Flipkart Stories</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Corporate Information</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm">HELP</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Payments</a></li>
              <li><a href="#" className="hover:underline">Shipping</a></li>
              <li><a href="#" className="hover:underline">Cancellation & Returns</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Report Infringement</a></li>
            </ul>
          </div>

          {/* Consumer Policy */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm">CONSUMER POLICY</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Return Policy</a></li>
              <li><a href="#" className="hover:underline">Terms Of Use</a></li>
              <li><a href="#" className="hover:underline">Security</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
              <li><a href="#" className="hover:underline">Grievance Redressal</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm">SOCIAL</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline flex items-center gap-2">
                <Facebook className="w-5 h-5" /> Facebook
              </a></li>
              <li><a href="#" className="hover:underline flex items-center gap-2">
                <Twitter className="w-5 h-5" /> Twitter
              </a></li>
              <li><a href="#" className="hover:underline flex items-center gap-2">
                <Youtube className="w-5 h-5" /> YouTube
              </a></li>
              <li><a href="#" className="hover:underline flex items-center gap-2">
                <Instagram className="w-5 h-5" /> Instagram
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm">Registered Office Address</h3>
            <address className="text-sm not-italic space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <span>Flipkart Internet Private Limited,<br />
                Buildings Alyssa, Begonia &<br />
                Clove Embassy Tech Village,<br />
                Outer Ring Road, Devarabeesanahalli Village,<br />
                "Devarabeesanahalli" // Proper noun, no change needed<br />
                Bengaluru, 560103,<br />
                "Bengaluru" // Proper noun, no change needed<br />
                Karnataka, India<br />
                "Karnataka" // Proper noun, no change needed</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+91-1234567890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>support@flipkart.com</span>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" 
                     alt="Payment methods" 
                     className="h-8" />
              </span>
            </div>
            <p className="text-sm text-gray-400">
              © 2007-{new Date().getFullYear()} Flipkart.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { DeliveryIcon, LocationIcon, SupportIcon, AppIcon } from "../../../Components/icons/FeatureIcons";
import { Button } from "../../../Components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto py-8 lg:py-12">
        {/* Main Hero */}
        <div className="relative rounded-lg mb-8 h-[460px]">
          <div className="flex flex-col md:flex-row bg-homesops-light">
            <div className="p-6 md:p-12 md:w-1/2 flex flex-col justify-center m-auto">
              <span className="text-homesops-dark text-lg md:text-xl font-medium">Easy, Fresh & Convenient</span>
              <h1 className="text-3xl md:text-5xl font-bold my-3 text-homesops-dark"> Stock Up on <br className="hidden md:block" /> Daily Essentials
              </h1>
              <p className="text-homesops-dark text-lg mb-6">Save Big on Your Favorite Brands</p>
              <div>
                <Button asChild className="bg-red-700 text-white">
                  <Link to="/category/all-products">Shop Now</Link>
                </Button>
              </div>
            </div>
            <div className="absolute -z-10">
              <img src="https://static.wixstatic.com/media/c837a6_20940cddd86f444ba764870c37a3d83f~mv2.jpg/v1/fill/w_1581,h_580,q_90,enc_avif,quality_auto/c837a6_20940cddd86f444ba764870c37a3d83f~mv2.jpg`"
                alt="Daily essentials"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 flex items-center">
            <DeliveryIcon className="h-10 w-10 text-homesops-red mr-4" />
            <div>
              <div className="font-medium">Free Delivery</div>
              <div className="text-sm text-gray-600">To Your Door</div>
            </div>
          </div>

          <div className="p-4 flex items-center">
            <LocationIcon className="h-10 w-10 text-homesops-red mr-4" />
            <div>
              <div className="font-medium">Local Pickup</div>
              <Link to="/customer-support" className="text-sm text-homesops-red underline">
                Check Out Locations
              </Link>
            </div>
          </div>

          <div className="p-4 flex items-center">
            <SupportIcon className="h-10 w-10 text-homesops-red mr-4" />
            <div>
              <div className="font-medium">Available for You</div>
              <Link to="/customer-support" className="text-sm text-homesops-red underline">
                Online Support 24/7
              </Link>
            </div>
          </div>

          <div className="p-4 flex items-center">
            <AppIcon className="h-10 w-10 text-homesops-red mr-4" />
            <div>
              <div className="font-medium">Order on the Go</div>
              <Link to="#" className="text-sm text-homesops-red underline">
                Download Our App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-3 gap-2 p-4">
          <div className="grid grid-cols-2">
            <div className=" grid grid-row-3">
              <h1 className="text-2xl font-bold">Links</h1>
              <a className="hover:underline text-gray-600" href="">
                <span>About Us</span>
              </a>
              <a className="hover:underline text-gray-600" href="">
                <span>Contact Us</span>
              </a>
              <a className="hover:underline text-gray-600" href="">
                <span>Term and Condition</span>
              </a>
            </div>
            <div className="grid grid-rows-3 mt-6">
              <a className="hover:underline text-gray-600" href="">
                <span>Privacy and Policy</span>
              </a>
              <a className="hover:underline text-gray-600" href="">
                <span>Order Tracking</span>
              </a>

              <a className="hover:underline text-gray-600" href="">
                <span></span>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="h-24"
              src="https://www.hokben.co.id/assets/img/hokbendelivery.png"
              alt=""
            />
          </div>
          <div className="grid grid-rows-3 bg-white">
            <h1 className="text-2xl font-bold text-center">FOLLOW US</h1>
            <div className="container mx-auto flex justify-evenly text-center">
              <img
                className="h-10"
                src="https://www.hokben.co.id/assets/img/icon/Youtube_48px.svg"
                alt=""
              />
              <img
                className="h-10"
                src="https://www.hokben.co.id/assets/img/icon/Twitter_48px.svg"
                alt=""
              />
              <img
                className="h-10"
                src="https://www.hokben.co.id/assets/img/icon/Facebook_48px.svg"
                alt=""
              />
              <img
                className="h-10"
                src="https://www.hokben.co.id/assets/img/icon/instagram.svg"
                alt=""
              />
              <img
                className="h-10"
                src="https://www.hokben.co.id/assets/img/icon/tiktok.png"
                alt=""
              />
              <img
                className="h-10"
                src="https://www.hokben.co.id/assets/img/icon/whatsapp.png"
                alt=""
              />
            </div>
            <div className="container mx-auto flex justify-center text-center">
              <img
                className="h-14"
                src="https://www.hokben.co.id/assets/img/icon/applestoreButton.png"
                alt=""
              />
              <img
                className="h-14"
                src="https://www.hokben.co.id/assets/img/icon/playstoreButton.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-2/3 mb-20 font-bold text-center">
            All images and materials are copyright protected and are the
            property of PT Eka Bogainti. Unauthorized use and/or duplication of
            these images and materials without written permission is against the
            law.
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          className="w-full"
          src="https://www.hokben.co.id/assets/img/group_539.png"
          alt=""
        />
      </div>
    </>
  );
}

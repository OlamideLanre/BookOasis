import { ArrowRightOutlined} from "@ant-design/icons";
import "./landingpage.css";
import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYw4duewbGdWeOJUOgOQieBRnGQJK0avr1Cw&s)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Book Oasis</h1>
            <p className="mb-5 text-white">
              Get lost in a captivating story, explore new ideas, and escape to
              new worlds with every turn of the page. Book Oasis is your
              one-stop-shop for all things books, where imagination knows no
              bounds.
            </p>
            <Link
              className=" px-10 py-2 bg-white text-green-400 rounded-lg mt-3 font-semibold"
              to="/signup"
            >
              Continue <ArrowRightOutlined />
            </Link>
          </div>
        </div>
      </div>

      <div className="aboutus-container">
        <div className="p-5">
          <h3 className="font-bold text-3xl text-center text-green-500">
            About US
          </h3>
          <div className="content text-center p-3 grid gap-10">
            <p>
              At Book Oasis, we believe that reading is the ultimate escape.
              Whether you're looking to discover new worlds, broaden your
              horizons, or simply unwind with a good book, our team is dedicated
              to providing you with the best possible book-buying experience.
              Our user-friendly website is designed with you in mind, making it
              easy to explore our vast selection of literary treasures. From
              bestsellers to timeless classics, we have something for everyone.
              We are passionate about books and the power of the written word,
              and we are committed to sharing that passion with you. So come,
              get lost in a good book at Book Oasis, and let your imagination
              run free
            </p>
          </div>
        </div>
      </div>
<hr />
      <div className="benefits-container">
        <div>
          <h3 className="font-bold text-3xl text-center text-green-500 tracking-wider py-2 ">
            Why BookOasis
          </h3>
          <div className="flex-con ">
            <div className="flex-children">
              <h3>Access to a vast selection of books</h3>
              <p>
                At Book Oasis, we have a wide range of books to choose from,
                including bestsellers, classics, and everything in between.
                You'll never run out of reading material!
              </p>
            </div>
            <div className="flex-children">
              <h3>Convenience</h3>
              <p>
                With our user-friendly website, you can browse and purchase
                books from the comfort of your own home, at any time of day or
                night. No more crowded bookstores or long lines!
              </p>
            </div>
            <div className="flex-children">
              <h3>Community of book lovers</h3>
              <p>
                At Book Oasis, you'll be part of a community of book lovers who
                are passionate about reading and eager to share their
                recommendations and reviews. Connect with like-minded
                individuals and expand your reading list!
              </p>
              <h4 className="text-center text-gray-300">coming soon...</h4>
            </div>
          </div>
        </div>
      </div>
      <hr />

    </>
  );
};

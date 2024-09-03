import { ArrowRightOutlined } from "@ant-design/icons";
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
            <button className=" px-10 py-2 bg-white text-green-400 rounded-lg mt-3 font-semibold">
              Continue <ArrowRightOutlined />
            </button>
          </div>
        </div>
      </div>

      <div className="aboutus-container">
        <div className="p-5">
          <h3 className="font-bold text-2xl text-center ">About US</h3>
          <div className="text-justify p-3 ">
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
            {/* <div className="ipad">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUVFRUVFRUVFRUVFRUVFxUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8NFSslFR0rLy0tKzctKystOCsrNzI3Ky0rLiswKzErLS0rKysuKy0rLSstKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAAAAQIDBgcIBAX/xABOEAACAQEDAwwMCgkFAQAAAAAAARECAyExBBJBBxMiMjRRYXFygZGyBRcjM1NUc5OhscLSCBQWJEJSwdHT8AZDYmOCkqTh40RklMPx4v/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EAB8RAQABBAMBAQEAAAAAAAAAAAABAgMTUQQxMzIhEf/aAAwDAQACEQMRAD8A3lDAD5jJMAAgpFIhMtADBgJgRUQVWYzIsaEmMAYmMlsAKpENAZEUiKS6QEIbZIA0VSIKSCwEKSipFAmEkDGgBMooljkTARLLZLAlmOoysiogxwBQAUhkopHoAQxIgaKZASBSYCQ2yCakQ0ZGY6gFIJktnw9l+ytnk9m7W1cUreiXphSIiZ/IH6SYjn/bUyae91+n3Qeqnk3g6+l+6emG5pf46Aijny1Vcm8HX+f4Slqq5L4Ov0+6TBc0OgopM56tVXJfB1+n7jJXqo5MsbOu/hn7C4bmhvrFJoHbVyTwdp6fuF21Mk8HafnmJhuaHQZCTn61VMk8HafnmH21Mk8HaDDc0OgSDNN7FaouR21aomqzn6VcZq43MpcMRxG4UNNSmmneovTW+jFVFVP1AoEwY4MoY0JIIKKABAJigYgEyKjK0YqgIgCwIFSUQmUmbA2IbFIACYgRBaGQikAQTUWkTaAYKzQ9Vl/NFyl1qDe6zQ9Vjcq5Xt2Z6WfSFanqefoKuyevN27stadCuoVednqp6alEZvpN1WoUvHqvMU++P4O62OWcqx6tZ1a1pipzmq5vvtpfTendF108Uc59FXKe0SvHqvML3xdohePVeYX4h1R5sLZUKU/19pCwSzXxp72BTqUvZUJYPu1onN+Ku+q+hhHKe0R/v3/x1+IHaJ/37/4/+Q6qq6YhVUX/AL+0303fEzcy661enVRfe1r9dzvlYXK/iwuA5N2iH4//AE/+UO0Q/H/6f/KdYpqV6bpvSla9aNxKcqVffOEaN8uzqobbqqpV0t0W1bwSvaUXReByPtEvx/8Ap/8AKRXqF1L/AF/9N/lOyZ9jM65fHhKlwb8TcVZKiNhVnLlOqOl3BXkexyfW8pqs5nMqtqJwzs2mtTGiYO0am2U1VZNVS3KotIp4E6U44pl85x3Kt223lso/7Drmpl3m28pT1Tl5PzA3MpEotHEhJggYFRSBiQ2AhMBSASSxslkCgAGBjKIHJsU2KRAAxiQ0QBkglIoqgx1lsxVMkoxVGharO5aeV7VBvlRomq1uWnle1Qeln0hX1/B22uWcux6tZ1lurFa5jVdnWfBGOg5P8HZbHLOXY9Ws6nXRftYbbe529OMzfocn0Rn2UY1zjtrOcWo3h05yUzW5m6bPmd3MYlSm9qtErWHpSbUhrSTahaf9O4x39Ku0bwGRut+EXPZXX/laQSr364fDZtrhMboTUZt7xfxdpRjDT4VOMhVZr6qjG7J6pS0acQMiz4udfO7O/RE8+9oHFULbzfpss5qW7/Rg9KKWQvHufmuj6XF0D+I+T0Ndzwd1+PBwYhWG2VUfTh+S4HHrU8ZnsW4cpq/B5vozSfiTmXrfmv8A6Ls7DNUbH+GnNXRLCPJeU7ttvK5R67Q65qY96tvKU9U5HbbstfK5R67Q67qY96tvKU9U5eT8q3NIolDZxMlUABIFIaEmBQqiUxslkDFUMKiiAGhkGFggEbDGhMEwKKoIKpILgGxIRVKpmOouox1GZRDRouqy/mtPK+2g3pmi6rO5qeV9tB62PSFfZ8Hfa5ZyrHq1nVsotU3e7O79qtPHfpW8cp+Dxtcr5Vj1azrVpbNu6cIuroV8vQ9J9EY6LLPU0qhxN+faXPgu3mZaclqTmKVjhXaRLxldJDqe/XjhrlmsEo5vuG3Voz2r1daWd8OJCijJal9GidM11uHwXb0cXMUskcQ0lDui0tI0cKjBb+nfIzqmsa+Dulnfd0fllK1qbvzlj9OzcTgBSyerepd0be0h7JO/0346BfFqtCp85aLS8Pz0mNZ96mtY3u0s3o3o39A6a6s76WLXfLNw3wcGIFrJqk9qoePdLScL7uPSZLKzdKcqL/rVVemoxV5031VxvquiNMLBP/0yWLebfOOl0v003AeSrR/O7Xylv/2HX9TLvNr5VdRHIHuu08pb+2dh1Mu8WvlfYpOXk9QS3GByKRHEyAQABUgAmACZRJQkDEwTIBAAFGEAqEaDEKRogukpEIpMCyQEwoqZjqLqMdRESzRNVrctHK+2g3pmi6rL+a0cr2qD0sekK+34PG1yvlWPVrOrqzcu5pzd3GmFfjPR0HKPg8bXK+XY9Ws6lU6L01Rtph65olfbo3z6QdFnK2uN0/F4hYLFl1UX3JrSosVhe83pa6CKaqdOZClqKrTHTPBc+gnNUxsLm7ptd5SuLYgZarPHY4LRYTfscL79/m4Ba28M2bru4rGP7PpQnVTdfRELTaaFGOgVVdLd7o06bTfl3BV00XNOmVd+pSvvvjSrvSgqoczG829ZvbxWmf7snPphzmbWcbR3bF3/AHcQlaUK6aJhws600wn6ALdml9HosFCvWHQZrCiE7ov0UZid2MaT526Za2MOU77R4TE8880mbJWs1xm435rqehY52AHk1P51acu29s7FqZ7ntfK+xScco3Tacu29s7JqabntPK+xQcvJ6hJbeDADiQDJACkNEocgAgkUgIQSAA2BIAQ0SUyGzYJClksdJBlGiUVAFCYJAwqamYx1MmoiJbNG1WNzUcr7aDeYNG1WV82o5f20HrY9IV93wedrlfLserWdUqrd81PTdrtOh36N6eg5X8Hra5Xy7Hq1nVWnOFUy/wBXQ/yvvZ9FSVTzpl6btepjTo/OBVNV7mpp33a7Tw9GCXPwBmv6tWF/cqVLTavngS5hU0VS9s8f1dF7vQCqreltcGvUqNG8UqnN7e9Ou03Xpt4Y4i1t33Vebo4MPWU0/qu++dbpumHfL3gJs6nhnVNxHfaZc6Vdc756CXW1i6tM91owafR/ZD1p4Q7n4KjjpeOhr1GSzsHVpiNDs6L/AO2C5gCmqHEtqbnrtOCwu4ZwHkz2LxxWNSrxSeK4zL8V3mlfO0p35gFZZqi7HQlT6EB5Hst0V8q19dR2TU03PaeWfUoONWO6K+Va+uo7Lqa7ntPLPqUHLyeoG3ibBAziZIciACgbEkACbAGIAYQDABAMAMLZA6iWbCZVJI5IMqZVJFCLQFEsGyWwIqEOpkSQNs0bVYfzajlP10G7s0fVX3NRy/tpPWx6Qr7vg97XK+XZdWs6paW6cqrNx00WkQpxfPjxnK/g+bXK+VY9Ws6mralOc9Y1fr8LninpmeI+ip0tJrOzNKuptJjNWGOiqkVDSiVTcm7qK/pUr7CFXLjPhzG6HKemE1iNW6eylaXGvNYS5vWF3rAp0rDYbGXtLSFLWHSTZZsNLMmfq2kPS5nhaCytd+qJV028zfGMQsHhpL13TnJJpw9f08HPC5wE3Q82Urt6m0V1zpjed+kltZ2zVDc7KKLRN77RStbnslinfbtrn3lLp45FTXDV6bxjXtOnFXqUAVpO95kuEtjaRcmmuB4cxnsFFLwidCqS3vpcRh13DZaJb15u6fVsWZLCpZrhzDjb58XK6QPJth3+vlWnrZ2TU23PaeWfUoOOZP36rjtPWzseptue08s+pQcvJ6gbegYhnEiWCCoEBSCRAEIIGACaEEiAcjJADDUSyqmQ2aCZSQkhoKtFJkIoIbYMQ2FRWQkVUBBFRo2qtuajlP10G8s0XVV3PRyn66T1sekD7tQCtKnK5+tZdWs6xSqXVdapuJha3MJ34KYm48t9guz+VZLnLJraqyz4zoVDzomNtS99n69H6e9lFhlla4rOw/DPoq9IPJ9OuOZd8UTD0XrAKsm/bf8ALRvRdddp6Tzl8v8Asr47afyWH4YdsDsr47X/ACWH4YHo7WL5z3F90UxzXc/SGsO/uj/lou4VsTzg9UDsr47X5uw/DF2wey3jtfm7D8MD0hTYfvH0U9GAKxd3dHd+zRv8R5u7YXZXx2vzdh+GHbC7K+O1+bsPwwPSGs/vHdP0aN7gXOQqkk6c/Oax2qalXSkecXqh9lfHa/N2H4Ziq1ROyvjlXm7D3APwcm79Vx1+s7Jqb7mtPLPqUHF+x72fMztGpvuavyz6lBy8nqBtpTZNIVHEgYIQ0ADQAggExtkgAMBMBSAABgZMlsio2CRpEopMgpMqTHSy0wKkQkhoBMllMlkVFTNG1U9z0ct+yb00fndm+w9nlNm7K0mJlNbalrSpu0vpN26opqiZHCqKS0bjlup9lVNT1rW7Sidi3U6ao/aTuniZ8/yEy7wVn5xfed2ajatXCDal+geXeDs/OL7xv9A8u8HZ+cX3jNRsa9k2WZiSdFNUVOq/hpVLWGF3qM1n2USUa1S5SnBJtOc6FTj9yP2fkJl3grPzi94n5CZd4GjzlPvjNRsatW5be+xM2r5B5d4GjzlHvh8hMu8BT5yn3y5qNjUmYq0bj8g8t8BT5yn3w+QGW+Ap85R74zUbGp9j1s+Z/Ydn1ONzV+Wq6lmaZk36A5XS+9Ur+Ojjv2TcfcdI/RfsS8msFZ1NOp1OuprDOcKFOMJI5r9dNUfkj9eQbEwk5UCZRJSYDE2NkthADFIgGgYCYAAgAxNEsoio2JGiUxogsaZjkpMCxpkjkAYhkMgbQDQgKEhyKAqgYwYCBMmRkFAhpDQE6BoGAFDQIAhikTABopEooAEMiQGBIwG2KRMkCoAUgUYiamAGhjKQAQElJgADTHIAACQAQMYgApDAAEgbAAqS0AAVIwAIGxJjAgcgAAKQgAApAgAAYqhAAhyAADJYAASAAUf/2Q==" alt="" />
          </div> */}
          </div>
        </div>
      </div>

      <div className="benefits-container">
        <div>
          <h3 className="font-bold text-2xl text-center ">Why BookOasis</h3>
          <div className="flex-con flex">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

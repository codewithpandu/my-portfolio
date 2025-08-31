import Image from "next/image";
import MyProfile from "@/public/images/profile.jpg";
import Javascript from "@/public/images/javascript.png";
import ReactJs from "@/public/images/react.png";
import Html from "@/public/images/html5.png";
import Css from "@/public/images/css3.png";
import Bootstrap from "@/public/images/bootstrap.png";
import Tailwind from "@/public/images/tailwind.png";
import Node from "@/public/images/node.png";
import Next from "@/public/images/next.png";
import Express from "@/public/images/express.png";
import MySql from "@/public/images/mysql.png";
import Mongo from "@/public/images/mongo.png";
import Laravel from "@/public/images/laravel.png";
import Illustrator from "@/public/images/illustrator.png";
import Photoshop from "@/public/images/photoshop.png";
import Wordpress from "@/public/images/wordpress.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="p-5">
      <section
        id="home"
        className="p-8 flex h-screen justify-center items-center md:justify-between lg:justify-around"
      >
        <div>
          <h2 className="text-2xl">Hi, I am</h2>
          <h1 className="text-3xl mt-5 lg:text-5xl font-bold">
            Pandu Setia Darmawan
          </h1>
          <p className="text-md text-gray-700">Web Development</p>
          <div className="mt-24 md:mt-12 flex gap-3">
            <a href="#">
              <FontAwesomeIcon
                className="w-14 hover:text-blue-900"
                icon={faSquareLinkedin}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="w-14 hover:text-blue-900"
                icon={faSquareGithub}
              />
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            className="rounded-full md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
            src={MyProfile}
            alt="Pandu Setia D"
            priority
          ></Image>
        </div>
      </section>

      <section id="about_me" className="py-12 md:py-16 lg:py-24">
        <h2 className="md:max-w-1/4 mx-auto p-4 text-center text-2xl font-bold border-4 tracking-widest">
          ABOUT ME
        </h2>
        <p className="mt-12 text-gray-700 max-w-2xl mx-auto text-justify md:text-center">
          Hai, saya Pandu Setia Darmawan. Saya lulusan Universitas Amikom
          Yogyakarta fakultas Ilmu Komputer prodi Teknik Informatika. Saya
          memiliki ketertarikan yang besar pada bidang teknologi, khususnya
          dalam pengembangan web.
        </p>

        <div className="mt-12 flex flex-col gap-12 md:flex-row md:justify-around">
          <div className="md:max-w-lg">
            <h2 className="text-2xl font-bold tracking-widest text-center">
              Design
            </h2>
            <p className="text-justify md:text-center mt-3">
              Saya menyalurkan kreativitas melalui desain vektor, untuk membuat
              asset grafis yang bisa mendukung berbagai kebutuhan digital.
            </p>
          </div>
          <div className="md:max-w-lg">
            <h2 className="text-2xl font-bold tracking-widest text-center">
              Blogger
            </h2>
            <p className="text-justify md:text-center mt-3">
              Selain itu, saya juga aktif sebagai blogger, membagikan pengalaman
              dan pengetahuan agar bisa memberikan inspirasi serta manfaat bagi
              pembaca.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-12 md:py-16 lg:py-24">
        <h2 className="md:max-w-1/4 mx-auto p-4 text-center text-2xl font-bold border-4 tracking-widest">
          SKILLS
        </h2>
        <div className="md:max-w-1/2 mx-auto">
          <p className="text-2xl font-bold mt-8 md:mt-12">Using Now:</p>
          <div className="mt-12 grid grid-cols-3 gap-3 gap-y-12 place-items-center">
            <Image src={Html} alt="Html" priority className="w-24"></Image>
            <Image src={Css} alt="Css" priority className="w-24"></Image>
            <Image
              src={Javascript}
              alt="javascript"
              priority
              className="w-24"
            ></Image>
            <Image
              src={Bootstrap}
              alt="Bootstrap"
              priority
              className="w-24"
            ></Image>
            <Image
              src={ReactJs}
              alt="ReactJs"
              priority
              className="w-24"
            ></Image>
            <Image
              src={Tailwind}
              alt="Tailwind"
              priority
              className="w-24"
            ></Image>
          </div>

          <p className="text-2xl font-bold mt-8 md:mt-12">Learning:</p>
          <div className="mt-12 grid grid-cols-3 ggap-3 gap-y-12 place-items-center">
            <Image src={Node} alt="Node" priority className="w-24"></Image>
            <Image
              src={Express}
              alt="Express"
              priority
              className="w-24"
            ></Image>
            <Image src={Next} alt="Next" priority className="w-24"></Image>
            <Image src={MySql} alt="MySql" priority className="w-24"></Image>
            <Image src={Mongo} alt="Mongo" priority className="w-24"></Image>
            <Image
              src={Laravel}
              alt="Laravel"
              priority
              className="w-24"
            ></Image>
          </div>

          <p className="text-2xl font-bold mt-8 md:mt-12">Other Skills:</p>
          <div className="mt-12 grid grid-cols-3 gap-3 gap-y-12 place-items-center">
            <Image
              src={Wordpress}
              alt="Wordpress"
              priority
              className="w-24"
            ></Image>
            <Image
              src={Illustrator}
              alt="Illustrator"
              priority
              className="w-24"
            ></Image>
            <Image
              src={Photoshop}
              alt="Photoshop"
              priority
              className="w-24"
            ></Image>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-12 md:py-16 lg:py-24">
        <h2 className="md:max-w-1/4 mx-auto p-4 text-center text-2xl font-bold border-4 tracking-widest">
          PORTFOLIO
        </h2>
        <div className="md:max-w-1/2 mx-auto"></div>
      </section>
    </div>
  );
}

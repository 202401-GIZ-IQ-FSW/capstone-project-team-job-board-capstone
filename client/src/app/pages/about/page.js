
import tailwindConfig from "../../../../tailwind.config"
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="mt-6 text-4xl font-bold">About Us</h1>
  
      <img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2021/01/19062456/women-in-tech-2021-featured.png' width="400px" height="400px" alt="women in tech image" ></img>
      <p className="text-center mt-4 ">Welcome to TechGirls Job Board, a platform created by tech girls, for tech girls. <br />
        We are a <b>passionate</b> community of women in technology, committed to empowering each other and breaking barriers in the tech industry.<br />
        <b>Our mission </b>is to provide a dedicated space where talented women can connect with inclusive companies that value diversity and innovation.</p>

      <p className=" mt-4 text-center">
        At TechGirls Job Board, we understand the unique challenges women face in the tech world, and we are here to make a difference. <br />
        Whether you're a seasoned professional or just starting your tech journey,
        our platform offers opportunities across various tech roles, <br />
        from software development and data science to cybersecurity and product management.<br />
      </p>
      <p className=" mt-4 text-center">Join us in building a more inclusive tech industry. <br />
        Explore job listings, find your dream role, and become a part of our vibrant community.<br />
        Together, we can inspire, support, and uplift each other to achieve greatness in tech.</p>




      <br />
      <p><h1 className="text-3xl font-bold mt-8 "> Testimonials </h1></p>




      <div class="justify-center	max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 text-center">
        <p class="text-center text-2xl font-medium text-gray-900 dark:text-white">"Thanks to your support, I was able to get an internship at Avesta group. Now, I'm at the end of the internship and got a job offer!"</p>
        <img class="w-6 h-6 rounded-full" src="https://avatars.design/wp-content/uploads/2022/09/5business-team-employee-personal-avatar.png" alt="profile picture avatar onluine"></img>
        <div class="text-center flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700 ">
          <div class="pr-3 font-medium text-gray-900 dark:text-white">Ahmed Mohamed</div>
          <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Intern @ Avesta Group</div>
        </div>
      </div>











    </main>
  );
}

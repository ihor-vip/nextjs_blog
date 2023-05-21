import Feed from "@components/Feed";

const Home = () => (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Next JS
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> VIP Design</span>
      </h1>
      <p className='desc text-center'>
        Next JS project to get prompts using AI
      </p>

      <Feed />
    </section>
);

export default Home;

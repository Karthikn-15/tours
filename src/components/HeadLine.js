export default function HeadLine() {
  return (
    <div>
      <FrontLine />
      <>
        <div class="text-center">
          <Head />
          <Para />
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Button />
            <LearnAbout />
          </div>
        </div>
      </>
    </div>
  );
}
function FrontLine() {
  return (
    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
      <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Announcing our next round of funding.{" "}
        <a href="/#" class="font-semibold text-indigo-600">
          <span class="absolute inset-0" aria-hidden="true" />
          more <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
function Head() {
  return (
    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      Data to enrich your online business
    </h1>
  );
}
function Para() {
  return (
    <p class="mt-6 text-lg leading-8 text-gray-600">
      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
      cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
    </p>
  );
}
function Button() {
  return (
    <button>
      <a
        href="/#"
        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Get started
      </a>
    </button>
  );
}

function LearnAbout() {
  return (
    <a href="/#" class="text-sm font-semibold leading-6 text-gray-900">
      Learn more <span aria-hidden="true">→</span>
    </a>
  );
}

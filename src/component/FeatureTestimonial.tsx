import { SyntheticEvent } from 'react'

interface TestimonialCardProps {
  title: string;
  quote: string;
  name: string;
  location: string;
  initials?: string;
  avatar?: string | null;
}

const TestimonialCard = ({ title, quote, name, location, initials = 'A', avatar = null }: TestimonialCardProps) => (
  <article className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
    {/* <div className="h-1.5 w-16 bg-yellow-300 rounded mb-4" /> */}
    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-800 font-semibold mb-6">"{quote}"</p>

    <div className="flex items-center gap-4">
      {/* Avatar: show image if provided, else initials fallback */}
      {avatar ? (
        <img
          src={avatar}
          alt={`${name} avatar`}
          loading="lazy"
          onError={(e: SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = '/feature-test-img-1.png' }}
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-300 flex items-center justify-center text-white font-semibold">{initials}</div>
      )}

      <div>
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-sm text-gray-400">/ {location}</div>
      </div>
    </div>
  </article>
)

const FeatureTestimonial = () => {
  return (
    <>
      <section className="relative py-16 bg-[#f7fbf4] overflow-hidden">
        {/* Decorative leaves (image assets) */}
        <img src="/leaf-img-1.png" alt="" aria-hidden className="hidden md:block absolute -left-1 top-8 w-45 opacity-40 pointer-events-none transform -rotate-180" />
        <img src="/leaf-img.png" alt="" aria-hidden className="hidden md:block absolute -right-1 bottom-8 w-45 opacity-40 pointer-events-none transform scale-x-[-1] -rotate-180" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left info column */}
            <div className="lg:col-span-1 flex flex-col justify-center">
              <div>
              <span className="inline-block bg-[#ede8f1] text-[#b479d9] purple-600 px-4 py-2 rounded-full text-sm font-medium">Testimonials</span>
              </div>
              <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                What People
                <span className="inline-block relative mt-1">
                  <span
                    className="absolute left-0 right-0 bottom-0 md:bottom-1 h-3 md:h-4 rounded-sm -z-10"
                    style={{ background: 'linear-gradient(90.83deg, #B1F1B3 2.11%, #F3EEC2 100%)' }}
                  />
                  <span className="relative text-gray-900">Are Saying</span>
                </span>
              </h2>

              <p className="mt-4 text-gray-500 max-w-md">We provide support for more than <br />15K+ Businesses.</p>
              <div>
              <button className="mt-6 inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-3 rounded-xl shadow hover:bg-emerald-600">
                Shop Now
              </button>
              </div>
            </div>

            {/* Right testimonial cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <TestimonialCard
                title="Print shirts for yourself or your online business"
                quote="For all your printing prerequisites. Offer to make and print their pamphlets, business cards, solicitations, & occasion programs."
                name="Anna Lukomska"
                location="Orlando, FL"
                initials="A"
                avatar="/avatar-anna.jpg"
              />

              <TestimonialCard
                title="Design shirts for yourself or your works"
                quote="For all your printing prerequisites. Business cards, solicitations, & occasion programs offer to make and print their pamphlets ."
                name="Harry Shoulder"
                location="Landmark, NY"
                initials="H"
                avatar="/avatar-harry.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gradient separator below section */}
      <div
        aria-hidden
        className="w-full h-2  mt-10"
        style={{ background: 'linear-gradient(90deg, #F59E0B 0%, #FDE68A 25%, #60A5FA 50%, #A78BFA 75%, #FB7185 100%)' }}
      />
    </>
  )
}

export default FeatureTestimonial

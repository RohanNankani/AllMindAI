import Image from 'next/image';
import ImageOne from '../../public/image.png';
import ImageTwo from '../../public/infinity.svg';
import ImageThree from '../../public/arrow.svg';

export default function ManageFeatures() {
  return (
    <section className="manage-like-a-pro-section py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Manage like a pro</h2>
        <p className="mt-6 text-lg text-gray-700">
          Take control of your ownership with a next-generation platform that lets you track, issue, and manage ownership. Be your own expert and scale back on your professional fees.
        </p>
        <div className="box">
          <div className="flex items-center">
            <Image src={ImageOne} alt="Image One" />
          </div>
          <div className="question-box bg-white py-4 px-6 rounded-lg shadow">
            <p className="font-semibold text-lg">What will my ownership be after my SAFEs convert?</p>
          </div>
          <p className="mt-8 text-xl font-semibold">Get it done with your AI Co-pilot</p>
          <p className="mt-2 text-lg text-gray-600">
            Breeze through essential tasks, pull critical information, and visualize your ownership data instantly.
          </p>
        </div>
        <div className="box">
          <Image src={ImageTwo} alt="Infinite image" />
          <h3 className="box-title">Supercharge your workflow</h3>
          <p className="box-description">
            Transform tasks such as issuing equity and stakeholder communications into remarkably simple, automated workflows. Get back to focusing on building your business in minutes, not hours.
          </p>
        </div>
        <div className="box">
          <Image src={ImageThree} alt="Arrow image" />
          <h3 className="box-title">Make decisions, not mistakes</h3>
          <p className="box-description">
            Handle everything from modeling hiring plans to assessing jargon-heavy term sheets without touching a spreadsheet. In-context advice is there when you need it, giving you clear insight to make decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
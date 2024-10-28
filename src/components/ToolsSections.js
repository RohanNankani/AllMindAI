export default function ToolsSection() {
  return (
      <section className="tools-section py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-12">
                  Manage everything in one place with simple, straightforward tools augmented with AI
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                  <div className="tool-card">
                      <h3 className="font-bold text-2xl mb-4">Fundraising</h3>
                      <p>Model rounds, issue SAFEs, and track the whole process all in one place.</p>
                  </div>
                  <div className="tool-card">
                      <h3 className="font-bold text-2xl mb-4">Cap Tables</h3>
                      <p>Effortlessly track and organize your cap table, providing a transparent view of your company’s ownership.</p>
                  </div>
                  <div className="tool-card">
                      <h3 className="font-bold text-2xl mb-4">Planning and Forecasting</h3>
                      <p>Powerful tools to model your hiring needs with visualizations that streamline your decision making.</p>
                  </div>
                  <div className="tool-card">
                      <h3 className="font-bold text-2xl mb-4">Issue Equity</h3>
                      <p>Create and manage multiple option plans and issue option grants with predictive workflows.</p>
                  </div>
                  <div className="tool-card">
                      <h3 className="font-bold text-2xl mb-4">Automated Signing</h3>
                      <p>Setup approvals and templates in a single click. Automatic reminders for outstanding actions to keep everything moving.</p>
                  </div>
                  <div className="tool-card">
                      <h3 className="font-bold text-2xl mb-4">Data Rooms</h3>
                      <p>No more scattered documents in inboxes and siloed information systems. All your documents in one place, found instantly when you need them.</p>
                  </div>
              </div>
          </div>
      </section>
  );
}

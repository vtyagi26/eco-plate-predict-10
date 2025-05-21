
const Stats = () => {
  return (
    <div className="bg-foodie-green py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-5xl font-bold text-foodie-yellow-light mb-2">10K+</div>
            <div className="font-medium">HAPPY RESTAURANTS</div>
          </div>
          
          <div className="p-6 border-y md:border-y-0 md:border-x border-foodie-green-light">
            <div className="text-5xl font-bold text-foodie-yellow-light mb-2">100K+</div>
            <div className="font-medium">ACTIVE USERS</div>
          </div>
          
          <div className="p-6">
            <div className="text-5xl font-bold text-foodie-yellow-light mb-2">95%</div>
            <div className="font-medium">SATISFACTION RATE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

const DiseaseAnalysis = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">Disease Analysis</h1>
      <h2 className="text-primary text-xl font-semibold text-center mt-12 mb-2">
        Identify your crop diseases & Get suggestions
      </h2>
      <div className="bg-tertiary max-w-[400px] md:max-w-[600px] mx-auto px-4 py-6 rounded-2xl shadow-xl">
        <p className="text-lg font-semibold text-center mb-3">Upload your crop images here</p>
        <form action="/upload-images" method="POST">
          <input type="file" name="cropImages" id="cropImages" className="file" multiple />
          <label htmlFor="cropImages" className="file-label shadow-xl">Select Images</label>
        </form>
      </div>

    </div>
    
  );
}
export default DiseaseAnalysis;
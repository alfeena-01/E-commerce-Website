export default function Filter() {
  return (
    <div>
   <div className="flex flex-wrap items-center space-x-2 mb-4 pl-4 sm:pl-20">
  <div className="w-6 h-6">
    <img src="https://cdn2.iconfinder.com/data/icons/4web-3/139/sort1-128.png" alt="sort" />
  </div>
  <label htmlFor="sort" className="font-semibold text-sm sm:text-base">Sort by:</label>
  <select
    id="sort"
    name="sort"
    className="border border-gray-300 rounded px-2 py-1 text-sm sm:text-base"
  >
    <option value="recommended">Recommended</option>
    <option value="price-low-high">Price: Low to High</option>
    <option value="price-high-low">Price: High to Low</option>
    <option value="newest">Newest</option>
  </select>

  <div className="pl-4 lg:pl-[1000px] sm:pl-[560px] mt-2 sm:mt-0">
    <details className="relative inline-block">
      <summary className="flex items-center cursor-pointer select-none space-x-1">
        <img src="https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Filter-128.png" alt="" className="h-6 w-6" />
        <span className="font-semibold text-sm sm:text-base">Filter</span>
      </summary>
      <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg p-4 z-10">
        <h4 className="font-semibold mb-2 text-sm sm:text-base">Category</h4>
        <label className="flex items-center space-x-2 mb-1">
          <input type="checkbox" className="form-checkbox" />
          <span className="text-sm sm:text-base">Materials</span>
        </label>
        <label className="flex items-center space-x-2 mb-1">
          <input type="checkbox" className="form-checkbox" />
          <span className="text-sm sm:text-base">Colors</span>
        </label>
        <label className="flex items-center space-x-2 mb-1">
          <input type="checkbox" className="form-checkbox" />
          <span className="text-sm sm:text-base">Sizes</span>
        </label>
      </div>
    </details>
  </div>
</div>

</div>
  )}
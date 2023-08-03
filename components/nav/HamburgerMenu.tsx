import Categories from '../Categories'

const HamburgerMenu = () => {
  return (
    <div className="lg:hidden">
      <div className=" absolute z-30 w-[100%] rounded-b-lg bg-white px-6">
        <div className="mt-[80px] px-6"></div>
        <Categories />
      </div>
    </div>
  )
}

export default HamburgerMenu

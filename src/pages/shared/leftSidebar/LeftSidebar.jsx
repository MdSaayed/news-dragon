import CategoryMenu from "../../../components/categoryMenu/CategoryMenu";

const LeftSidebar = () => {
    return (
        <div>
            <h1 className='font-semibold text-[#403F3F] text-xl mb-4'>All Caterogy</h1>
            <CategoryMenu />
        </div>
    );
};

export default LeftSidebar;
import PageExmapleLayout from "@/components/layout/PageExmapleLayout";

const PageLayoutExample = () => {
    return <div className="text-red-500">Hello mello</div>;
};

PageLayoutExample.getLayout = function getLayout(page) {
    return <PageExmapleLayout>{page}</PageExmapleLayout>;
};

export default PageLayoutExample;

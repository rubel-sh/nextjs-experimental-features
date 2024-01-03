import CountryInfo from "@/components/mock-search/CountryInfo";
import React, { useCallback, useState } from "react";
import _debounce from "lodash/debounce";
import _ from "lodash";
import MockSearchLoadingShimmer from "@/components/mock-search/MockSearchLoadingShimmer";
import MockSearchErrorMessage from "@/components/mock-search/MockSearchErrorMessage";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
    // Fetch data from external API
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();

    return {
        props: {
            ssrData: data.slice(0, 50),
        },
    };
};

const index = ({ ssrData }) => {
    const [initialData, setInitialData] = useState(ssrData || []);
    const [searchValues, setSearchValues] = useState(null);

    //   AFTER SEARCHING SOMETHING
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log(error);

    // CSR ON CLIENT SIDE NAVIGATION
    const NAV_LINKS = ["Bangladesh", "India", "Pakistan"];
    const router = useRouter();

    const handleDebounceFn = async (value) => {
        // FETCH API
        try {
            const url = `https://restcountries.com/v3.1/name/${value}`;
            const res = await fetch(url);
            const data = await res.json();

            // Set initialData to newly matched data

            // Search Not Found
            if (data.status === 404) {
                setError(data.message);
                setInitialData([]);
            } else {
                setError(null);
                setInitialData(data);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const debounceFn = useCallback(_debounce(handleDebounceFn, 500), []);

    const handleChange = (e) => {
        if (!e.target.value) {
            setInitialData(ssrData);
            setSearchValues(null);
            setIsLoading(false);
            setError(null);
            return;
        }
        setIsLoading(true);
        setSearchValues(e.target.value);
        debounceFn(e.target.value);
    };

    return (
        <div className="max-w-[1260px] px-2 mx-auto mt-10">
            {/* Search Box */}
            <div className="ml-2.5">
                <h3 className="text-lg font-semibold mb-3">Search Here</h3>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchValues}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 mr-2 outline-blue-600"
                    />
                </div>
            </div>
            <hr className="mt-5" />
            <div className="grid grid-cols-resSuraGrid gap-5 rounded-md mx-auto mb-10">
                {isLoading && [...Array(3)].map((_) => <MockSearchLoadingShimmer />)}
                {!isLoading && error && <MockSearchErrorMessage message={error} />}
                {!isLoading &&
                    !error &&
                    initialData.map((country) => <CountryInfo key={country.name.official} country={country} />)}
            </div>

            {/* Demo pagination */}
            <div className="flex justify-center">
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link}
                        href={{
                            pathname: router.pathname,
                            // pathname: "/mock-search",
                            query: {
                                ...router.query,
                                country: link,
                            },
                        }}
                        className="bg-blue-500 text-white px-3 py-2 rounded-md mr-2"
                    >
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default index;

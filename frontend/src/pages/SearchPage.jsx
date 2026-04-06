import { useSearchParams } from "react-router-dom"
import { useSearchByText } from "../hooks/useSearchByText";

export const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("query");
    const { data, isLoading } = useSearchByText(searchText)
}
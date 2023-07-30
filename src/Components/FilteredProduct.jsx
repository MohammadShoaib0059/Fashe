import styled from "styled-components";
import { mobile } from "../Responsive";
import { Filtered_Product, getproducts } from "../Redux/Slicer/ProductSlice";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterData from "./FilterData";
import { useDispatch } from "react-redux";
import { useEffect} from "react";

const Container = styled.div``;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const FilteredProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproducts());
  }, []);
    const handleFilter = (price) => {
    dispatch(Filtered_Product(price));
    // console.log(FilteredProduct());
  };
  return (
    <Container>
    <img src="../Images/banner-1.jpg" width="100%"/>
    <Title>Dresses</Title>
    <FilterContainer>
      <Filter>
        <FilterText>Filter Products:</FilterText>
        <FilterAltIcon/>
      </Filter>
      <Filter>
        <FilterText>Sort Products:</FilterText>
        <button onClick={() => handleFilter('all')}>All Products</button>
        <button onClick={() => handleFilter(100)}>100</button>
        <button onClick={() => handleFilter(70)}>70</button>
      </Filter>
    </FilterContainer>
      <FilterData/>
  </Container>
  )
}

export default FilteredProduct

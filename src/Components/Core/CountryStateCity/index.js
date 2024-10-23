import { City, Country, State } from "country-state-city";
import { Col, Row } from "react-bootstrap";
import DropDown from "../DropDown";
import "./CountryStateCity.module.css";

export default function CountryStateCity({
  setSelectedCountry,
  setSelectedCity,
  setSelectedState,
  selectedCountry,
  selectedState,
  selectedCity,
  colLength = 4,
}) {
  const allCountries = Country?.getAllCountries()?.map((ele) => {
    return { label: ele.name, value: ele };
  });
  return (
    <Row>
      {setSelectedCountry && (
        <Col md={colLength}>
          <DropDown
            option={allCountries}
            setter={(e) => {
              setSelectedState(null);
              setSelectedCity(null);
              setSelectedCountry(e);
            }}
            value={selectedCountry}
            label={"Country"}
          />
        </Col>
      )}
      {setSelectedState && (
        <Col md={colLength}>
          <DropDown
            option={State?.getStatesOfCountry(
              selectedCountry?.value?.isoCode
            )?.map((ele) => ({
              label: ele.name,
              value: ele,
            }))}
            setter={(e) => {
              setSelectedCity(null);
              setSelectedState(e);
            }}
            value={selectedState}
            disabled={!selectedCountry}
            label={"State"}
          />
        </Col>
      )}
      {setSelectedState && (
        <Col md={colLength}>
          <DropDown
            option={City?.getCitiesOfState(
              selectedState?.value?.countryCode,
              selectedState?.value?.isoCode
            )?.map((ele) => ({
              label: ele.name,
              value: ele,
            }))}
            disabled={!selectedCountry || !selectedState}
            setter={(e) =>
              typeof e == "string"
                ? setSelectedCity({ label: e, value: e })
                : setSelectedCity(e)
            }
            value={selectedCity}
            label={"City"}
          />
        </Col>
      )}
    </Row>
  );
}

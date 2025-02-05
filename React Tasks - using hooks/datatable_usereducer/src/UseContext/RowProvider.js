import React, { useState, useContext, useEffect } from "react";
import { createContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RowContext = createContext();

const RowProvider = ({ children }) => {
  const [rows, setRows] = useState([]);
  const [state, setState] = useState([]);
  const [view, setView] = useState({});
  const [city, setCity] = useState([]);
  const [checkedFlag, setCheckedFlag] = useState(false);
  const [countryFlag, setcountryFlag] = useState(false);
  const [addFlag, setAddFlag] = useState(false);
  const [rowFlag, setRowFlag] = useState(false);
  const [remarkFlag, setremarkFlag] = useState(false);
  const [obj, setObj] = useState(null);
  const [id, setId] = useState(null);
  const [list, setList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [remarks, setRemarks] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isRemarkDisable, setIsRemarkDisable] = useState(false);

  const data = {
    USA: {
      Washington: ["Seattle", "Bellingham", "Shelton"],
      California: ["Los Angeles", "Berkeley", "San Diego"],
    },
    India: {
      Tamilnadu: ["Chennai", "Theni", "Coimbatore"],
      Kerala: ["Thrissur", "Trivandrum", "Varkala"],
    },
    UK: {
      England: ["London", "Oxford", "Liverpool"],
      Scotland: ["Edinburgh", "Livingston", "Hamilton"],
    },
  };
  const countryData = [
    {
      countryName: "USA",
      stateData: [
        {
          stateName: "Washington",
          city: [
            {
              cityName: "Seattle",
            },
            {
              cityName: "Bellingham",
            },
            {
              cityName: "Shelton",
            },
          ],
        },
        {
          stateName: "California",
          city: [
            {
              cityName: "Los Angeles",
            },
            {
              cityName: "Berkeley",
            },
            {
              cityName: "San Diego",
            },
          ],
        },
      ],
    },
    {
      countryName: "India",
      stateData: [
        {
          stateName: "Tamil Nadu",
          city: [
            {
              cityName: "Chennai",
            },
            {
              cityName: "Theni",
            },
            {
              cityName: "Coimbatore",
            },
          ],
        },
        {
          stateName: "Kerala",
          city: [
            {
              cityName: "Thrissur",
            },
            {
              cityName: "Trivandrum",
            },
            {
              cityName: "Varkala",
            },
          ],
        },
      ],
    },
    {
      countryName: "UK",
      stateData: [
        {
          stateName: "England",
          city: [
            {
              cityName: "London",
            },
            {
              cityName: "Oxford",
            },
            {
              cityName: "Liverpool",
            },
          ],
        },
        {
          stateName: "Scotland",
          city: [
            {
              cityName: "Edinburgh",
            },
            {
              cityName: "Liviston",
            },
            {
              cityName: "Hamilton",
            },
          ],
        },
      ],
    },
  ];

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [newRow, setNewRow] = useState({
    country: "",
    remarks: "",
    flag: false,
  });

  const isTableEmpty = rows.length === 0;

  // useEffect(() => {
  //   setIsRemarkDisable(false);
  // }, [isTableEmpty]);

  useEffect(() => {
    if (obj) {
      setList([...list, obj]);
    }
  }, [obj]);

  const addRow = () => {
    setNewRow({});
    console.log(checkedFlag);
    console.log(countryFlag);
    if (checkedFlag || countryFlag) {
      setRows([...rows, newRow]);
      setRowFlag(true);
    } else {
      toast.warning("Please select any country");
    }
    console.log(addFlag);
    if (!rows.flag) {
      console.log(!rows.flag);
      setAddFlag(true);
      console.log(addFlag);
    } else {
      console.log(addFlag);
      setAddFlag(false);
    }
  };

  const [isCheckboxDisabled, setIsCheckboxDisabled] = useState(false);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    console.log(e.target.value);
    console.log(countryData);
    if (e.target.value === "") {
      setState([]);
      setCity([]);
      setcountryFlag(false);
    } else {
      const stateobj = countryData.find(
        (country) => country.countryName === e.target.value
      );
      console.log(stateobj);
      setState(stateobj.stateData);
      setcountryFlag(true);
    }

    setSelectedCountry(country);
    setSelectedState("");
    setSelectedCity("");
  };
  const handleStateChange = (e, rowIndex) => {
    // e.target.value;
    setSelectedState(e.target.value);
    console.log(e.target.value);

    if (e.target.value === "") {
      setCity([]);
    } else {
      console.log(state);
      const cityobj = state.find((res) => res.stateName === e.target.value);
      console.log(cityobj);
      setCity(cityobj.city);
    }
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[rowIndex].state = e.target.value;
      return updatedRows;
    });
  };

  const handleCityChange = (e, rowIndex) => {
    console.log(e.target.value);
    setSelectedCity(e.target.value);
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[rowIndex].city = e.target.value;
      return updatedRows;
    });
  };

  const handleRemarksChange = (e, rowIndex) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[rowIndex].remark = e.target.value;
      return updatedRows;
    });
    // if (e.target.value) {
    //   setremarkFlag(true);
    // } else {
    //   setremarkFlag(false);
    // }

    // setRows((prevRows) => {
    //   const updatedRows = [...prevRows];
    //   updatedRows[rowIndex].remarks = remarks;
    //   return updatedRows;
    // });
  };

  const handleInputChange = (e) => {
    setRemarks(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    console.log(e.target.checked);

    if (e.target.checked) {
      const stateobj = countryData.find(
        (country) => country.countryName === "India"
      );
      console.log(stateobj);
      setState(stateobj.stateData);
      setCheckedFlag(true);
    } else {
      setCheckedFlag(false);
    }
    setIsCheckboxChecked((prevValue) => !prevValue);
    // setNewRow((prevRow) => ({
    //   ...prevRow,
    //   country: isCheckboxChecked ? "" : "India",
    // }));
  };

  const handleSave = (index, e) => {
    console.log(rows);
    console.log(selectedState);
    console.log(selectedCity);
    if (selectedState === "") {
      toast.warning("Please select a state before saving.");
      return;
    }
    if (selectedCity === "") {
      toast.warning("Please select a city before saving.");
      return;
    }
    const updatedRows = rows.map((row) => {
      return {
        ...row,
        flag: true,
      };
    });
    setRows(updatedRows);
    setAddFlag(false);
  };

  const handleCancel = (ind) => {
    console.log(rows);
    console.log(rows.length);
    if (rows.length >= 1) {
      console.log(rows.length);
      setRowFlag(false);
    }
    const updateRow = rows.filter((res, index) => index !== ind);
    console.log(updateRow);
    setRows(updateRow);
    setAddFlag(false);
  };

  const handleEdit = (index) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index].flag = false;
      console.log(updatedRows);
      return updatedRows;
    });
    setAddFlag(true);
    // setRowFlag(true)
  };

  const handleDelete = (ind) => {
    console.log(rows);
    console.log(rows.length);
    if (rows.length <= 1) {
      console.log(rows.length);
      setRowFlag(false);
    }
    const updateRow = rows.filter((res, index) => index !== ind);
    console.log(updateRow);
    setRows(updateRow);
  };

  const ContextValue = {
    selectedCountry,
    selectedState,
    selectedCity,
    setSelectedCountry,
    setSelectedState,
    setSelectedCity,
    countryData,
    remarks,
    setRemarks,
    setId,
    id,
  };

  return (
    <RowContext.Provider
      value={{
        rows,
        setRows,
        view,
        setView,
        state,
        list,
        setList,
        countryFlag,
        remarkFlag,
        rowFlag,
        addFlag,
        setAddFlag,
        setRowFlag,
        addRow,
        city,
        ContextValue,
        countryData,
        newRow,
        setNewRow,
        handleCountryChange,
        handleStateChange,
        handleCityChange,
        handleRemarksChange,
        handleInputChange,
        handleCheckboxChange,
        isCheckboxChecked,
        setIsCheckboxChecked,
        isCheckboxDisabled,
        setIsCheckboxDisabled,
        isRemarkDisable,
        checkedFlag,
        setCheckedFlag,
        setIsRemarkDisable,
        handleSave,
        handleCancel,
        handleEdit,
        handleDelete,
        isTableEmpty,
        setRowFlag,
        setcountryFlag,
        rowFlag,
        setState,
        state,
      }}
    >
      {children}
    </RowContext.Provider>
  );
};

export default RowProvider;

import React, { useState, useEffect } from "react";
import { Virtuoso } from "react-virtuoso";
import { useSelector, useDispatch } from "react-redux";
import { getDrugs, reset } from "../../features/medicineReducer/TradeNameSlice";
import Spinner from "../../components/Spinner";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
function TradeName() {
  const dispatch = useDispatch();

  const { drugs, isLoading, isError, message } = useSelector(
    (state) => state.drugs
  );

  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!query) setItems(drugs);
    setItems((_) =>
      drugs.filter((x) =>
        x.TradeName.toLowerCase().includes(query?.toLowerCase())
      )
    );
  }, [query, drugs]);
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getDrugs());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2>TradeName</h2>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search by Trade Name"
          autoComplete="off"
          autoFocus
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputGroup>

      <Virtuoso
        style={{ height: "600px", background: "#f8f8f8" }}
        data={items}
        totalCount={10000}
        itemContent={(index, page) => (
          <div
            style={{
              background: index % 2 === 0 ? "#ffbb00" : "#ffcc99",
              color: "#333",
              padding: "10px",
              fontSize: "16px",
              fontFamily: "Arial, sans-serif",
              border: "1px solid #ccc",
              borderRadius: "5px",
              margin: "5px 0"
            }}
          >
            {page.TradeName}
          </div>
        )}
      />
    </div>
  );
}

export default TradeName;

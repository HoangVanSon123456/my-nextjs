"use client";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
type Props = {};

export default function CSR({}: Props) {
  const [person, setPerson] = useState("");

  useEffect(() => {
    axios
      .get<{ person: string }>("/api/person")
      .then((res) => setPerson(res.data.person));
  });

  return <div>Hey {person}</div>;
}

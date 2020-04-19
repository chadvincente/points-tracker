import React from "react";
import {Membership} from "../models/membership";
import {Program} from "../models/program";
import Dashboard from "./Dashboard";
import PageTemplate from "./PageTemplate";
import Welcome from "./Welcome";

const TEMP_MEMBERSHIPS: Membership[] = [
  {
    program: "chase",
    userId: "abc",
  },
  {
    program: "delta",
    userId: "abc",
  },
  {
    program: "airfrance",
    userId: "abc",
  },
  {
    program: "united",
    userId: "abc",
  }
];

const TEMP_PROGRAMS: Record<string, Program> = {
  airfrance: {
    logo: "airfrance",
    name: "Air France",
    pointValueMultiplier: 2,
    title: "Flying Blue",
    url: "www.airfrance.us",
  },
  chase: {
    logo: "chase",
    name: "Chase",
    pointValueMultiplier: 2,
    title: "Ultimate Rewards",
    url: "www.chase.com",
  },
  delta: {
    logo: "delta",
    name: "Delta",
    pointValueMultiplier: 2,
    title: "SkyMiles",
    url: "www.delta.com",
  },
  united: {
    logo: "united",
    name: "United",
    pointValueMultiplier: 2,
    title: "MileagePlus",
    url: "www.united.com",
  }
};

const App: React.FC = () =>
  <PageTemplate>
    <Welcome />
    <Dashboard memberships={TEMP_MEMBERSHIPS} programs={TEMP_PROGRAMS} />
  </PageTemplate>

export default App;

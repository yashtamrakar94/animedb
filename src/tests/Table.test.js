import React from "react";
import { mount } from "enzyme";
import { Table } from "../components/Table";

const tableProps = [
  {
    end_date: "Sep 2013",
    episodes: 25,
    image_url:
      "https://cdn.myanimelist.net/images/anime/10/47347.jpg?,s=29949c6e892df123f0b0563e836d3d98",
    mal_id: 16498,
    members: 3359082,
    rank: 1,
    score: 8.53,
    start_date: "Apr 2013",
    title: "Shingeki no Kyojin",
    type: "TV",
    url: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
  },
];

let wrapper;

beforeEach(() => {
  jest.clearAllMocks();
  wrapper = mount(<Table {...tableProps} />);
});

describe("Table tests", () => {
  it("should render correctly", () => {
    expect(wrapper.toBeTruthy());
  });

  it("Check for table rows count", () => {
    const header = wrapper.find("thead");
    const rows = header.find("tr");
    expect(rows.length).toEqual(1);
  });

  it("Check for Header Cell", () => {
    const header = wrapper.find("thead");
    const rows = header.find("tr");
    const rowCells = rows.find("th");

    expect(rowCells.at(0).text()).toEqual("Name");
    expect(rowCells.at(1).text()).toEqual("Rank");
  });
});

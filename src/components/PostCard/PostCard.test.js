import { shallow } from "enzyme";
import PostCard from "./PostCard";
import React from "react";
import toJson from "enzyme-to-json";

describe("PostCard component", () => {

    const component = shallow(<PostCard />);

    it("renders properly", () => {

        expect(toJson(component)).toMatchSnapshot();
    })






});
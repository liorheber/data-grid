import React from "react";
import { shallow } from "enzyme";
import { Sample } from "../../src/sample/sample";

describe("Sample component", () => {

	test("component accepts label prop", () => {
		const comp = shallow(<Sample label="test" />);
		const firstLabel = comp.find("div").at(1);

		expect(firstLabel.text()).toEqual("From props: test");
	});
});

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScreenSize } from "./screen-size";

describe("ScreenSize", () => {
  let component: ScreenSize;
  let fixture: ComponentFixture<ScreenSize>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenSize],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenSize);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

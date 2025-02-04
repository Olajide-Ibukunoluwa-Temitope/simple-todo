/// <reference types="cypress" />

describe("test to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays three todo items by default", () => {
    // cy.visit("http://localhost:3000");
    cy.get(".todo-list-container li").should("have.length", 3);

    // We can go even further and check that the default todos each contain the correct text

    cy.get(".todo-list-container li span")
      .first()
      .should("have.text", "Setup development environment");

    cy.get(".todo-list-container li span")
      .eq(1)
      .should("have.text", "Develop website and add content");

    cy.get(".todo-list-container li span")
      .last()
      .should("have.text", "Deploy to live server");
  });

  it("can add new todo item", () => {
    const newItem = "Write more tests";

    cy.get("[data-test=new-todo]").type(`${newItem}{enter}`);

    cy.get(".todo-list-container li span")
      .should("have.length", 4)
      .last()
      .should("have.text", newItem);
  });

  it("can check off an item as completed", () => {
    cy.contains("Develop website and add content")
      .parent()
      .find("input[type=checkbox]")
      .check();

    cy.contains("Develop website and add content")
      .parent()
      .find("span")
      .should("have.class", "completed");
  });

  it("can delete todo item", () => {
    const todoText = "Deploy to live server";

    cy.contains(todoText).parent().find("button").click();
  });

  it("displays assign teammate dropdown", () => {
    const todoText = "Deploy to live server";

    cy.contains(todoText)
      .parent()
      .find(".assign-user .ri-user-add-line")
      .click();

    cy.get(".assign-user .user-list-container ul .user-list")
      .first()
      .should("have.text", "Jone Joe");

    cy.get(".assign-user .user-list-container ul .user-list")
      .eq(1)
      .should("have.text", "David Joe");

    cy.get(".assign-user .user-list-container ul .user-list")
      .last()
      .should("have.text", "Steve Joe");
  });

  it("can assign teammate to todo item", () => {
    const todoText = "Develop website and add content";

    cy.contains(todoText)
      .parent()
      .find(".assign-user .ri-user-add-line")
      .click();

    cy.get(".assign-user .user-list-container ul .user-list").first().click();

    cy.get(
      ".assign-user .assigned-user-logo-container .assigned-user-logo span"
    ).should("have.text", "J");
  });

  it("can clear assigned teammate", () => {
    const todoText = "Develop website and add content";

    cy.contains(todoText)
      .parent()
      .find(".assign-user .ri-user-add-line")
      .click();

    cy.get(".assign-user .user-list-container ul .user-list").first().click();

    cy.get(".assign-user .assigned-user-logo-container .clear-icon").click();

    cy.get(".assign-user i").should("have.class", "ri-user-add-line");
  });
});

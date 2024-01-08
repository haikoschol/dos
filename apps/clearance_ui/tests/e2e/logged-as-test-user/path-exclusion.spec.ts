// SPDX-FileCopyrightText: 2023 Double Open Oy
//
// SPDX-License-Identifier: MIT

import { expect, test } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test.beforeEach(async ({ page }) => {
    await page.goto("/packages/pkg%3Ageneric%2Fdos-monorepo%400.0.0");
});

test("create path exclusion, delete from Main UI", async ({ page }) => {
    const comment = "Test create path exclusion, delete from Main UI";

    // Create a path exclusion
    await page.getByText("apps").click();
    await page.getByText("api").click();
    await page.getByText("src").click();
    await page.getByTestId("path-exclusion-subdirs").click();
    await expect(page.getByTestId("path-exclusion-pattern")).toHaveValue(
        "apps/api/src/**",
    );
    await page.getByLabel("Reason").click();
    await page.getByLabel("OTHER").click();
    await page.getByPlaceholder("Comment...").click();
    await page.getByPlaceholder("Comment...").fill(comment);
    await page.getByRole("button", { name: "Add path exclusion" }).click();
    // Wait for the toast to appear, contain a success text and disappear
    const toastCreated = page.getByRole("status").first();
    await toastCreated.waitFor({ state: "visible" });
    await expect(toastCreated).toContainText(
        "Path exclusion added successfully.",
    );
    await toastCreated.waitFor({ state: "hidden" });
    console.log("path exclusion created");

    // Delete the same exclusion
    await page
        .locator("button")
        .filter({ hasText: "List/delete path exclusions" })
        .click();
    await page
        .getByTestId("path-exclusion")
        .filter({ hasText: comment })
        .getByTestId("delete-clearance-button")
        .click();
    await expect(page.getByLabel("Delete").getByText("test")).toContainText(
        "test",
    );
    await page.getByRole("button", { name: "Delete" }).click();

    // Wait for the toast to appear, contain a success text and disappear
    const toastDeleted = page.getByRole("status").first();
    await toastDeleted.waitFor({ state: "visible" });
    await expect(toastDeleted).toContainText(
        "Path exclusion deleted successfully.",
    );
    await toastDeleted.waitFor({ state: "hidden" });
    console.log("path exclusion deleted from Main UI");
});

test("create path exclusion, delete from Clearance Library", async ({
    page,
}) => {
    const comment = "Test create path exclusion, delete from Clearance Library";

    // Create a path exclusion
    await page.getByRole("link", { name: "package-lock.json" }).click();
    await page.getByTestId("path-exclusion-similar").click();
    await expect(page.getByTestId("path-exclusion-pattern")).toHaveValue(
        "**/*.json",
    );
    await page.getByLabel("Reason").click();
    await page.getByLabel("OPTIONAL_COMPONENT_OF").click();
    await page.getByPlaceholder("Comment...").click();
    await page.getByPlaceholder("Comment...").fill(comment);
    await page.getByRole("button", { name: "Add path exclusion" }).click();
    // Wait for the toast to appear, contain a success text and disappear
    const toastCreated = page.getByRole("status").first();
    await toastCreated.waitFor({ state: "visible" });
    await expect(toastCreated).toContainText(
        "Path exclusion added successfully.",
    );
    await toastCreated.waitFor({ state: "hidden" });
    console.log("path exclusion created");

    // Delete the same exclusion
    await page.goto("/clearances");
    await page.getByTestId("clearance-lib-path-exclusions").click();
    await page
        .getByRole("row")
        .filter({ hasText: comment })
        .getByTestId("delete-clearance-button")
        .click();
    await expect(
        page.getByLabel("Delete").getByText("**/*.json"),
    ).toContainText("**/*.json");
    await page.getByRole("button", { name: "Delete" }).click();
    // Wait for the toast to appear, contain a success text and disappear
    const toastDeleted = page.getByRole("status").first();
    await toastDeleted.waitFor({ state: "visible" });
    await expect(toastDeleted).toContainText(
        "Path exclusion deleted successfully.",
    );
    await toastDeleted.waitFor({ state: "hidden" });
    console.log("path exclusion deleted from Clearance Library");
});

import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { add } from "../src/main.js";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

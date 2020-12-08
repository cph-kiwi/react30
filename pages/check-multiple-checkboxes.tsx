import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
      html {
        font-family: sans-serif;
        background: #ffd1dc;
      }
      `;

const data = [
  {
    activity: "This is an inbox layout.",
    check: false,
  },
  {
    activity: "Check one item.",
    check: false,
  },
  {
    activity: "Hold down your Shift key.",
    check: false,
  },
  {
    activity: "Check a lower item.",
    check: false,
  },
  {
    activity: "Everything in between should also be set to checked.",
    check: false,
  },
  {
    activity: "Try to do it without any libraries.",
    check: false,
  },
  {
    activity: "Just regular JavaScript.",
    check: false,
  },
  {
    activity: "Don't forget to tweet your result!.",
    check: false,
  },
];

const Checkboxes = () => {
  const [items, setItems] = useState(data);
  const [newItem, setNewItem] = useState("");
  const [lastChecked, setLastChecked] = useState<number | undefined>(undefined);

  return (
    <div>
      <GlobalStyles />
      <Head>
        <title>Checkboxes</title>
      </Head>
      <Navbar />
      <Heading>
        <h1>Hold shift and check multiple checkboxes</h1>
      </Heading>
      <Inbox>
        {items.map((item, index) => (
          <div className="item" key={item.activity}>
            <input
              type="checkbox"
              checked={item.check}
              onClick={(e) => {
                const currentClicked = index;
                const lLastChecked =
                  e.shiftKey && !item.check
                    ? lastChecked ?? currentClicked
                    : currentClicked;
                const minIndex =
                  lLastChecked < currentClicked ? lLastChecked : currentClicked;
                const maxIndex =
                  currentClicked < lLastChecked ? lLastChecked : currentClicked;
                if (item.check === false) {
                  setLastChecked(index);
                }
                setItems(
                  items.map((listItem, listIndex) => {
                    const check =
                      listIndex >= minIndex && listIndex <= maxIndex
                        ? !item.check
                        : listItem.check;
                    return { activity: listItem.activity, check: check };
                  })
                );
              }}
            />
            <p>{item.activity}</p>
          </div>
        ))}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setItems([...items, { activity: newItem, check: false }]);
            setNewItem("");
          }}
        >
          <input
            placeholder="Type list item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </form>
      </Inbox>
      <Footer />
    </div>
  );
};

const Heading = styled.div`
  display: flex;
  text-align: center;

  h1 {
    flex: 1;
  }
`;

const Inbox = styled.div`
  max-width: 400px;
  margin: 50px auto;
  background: white;
  border-radius: 5px;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);

  .item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
  }

  .item:last-child {
    border-bottom: 0;
  }

  input:checked + p {
    background: #f9f9f9;
    text-decoration: line-through;
  }

  input[type="checkbox"] {
    margin: 20px;
  }

  p {
    margin: 0;
    padding: 20px;
    transition: background 0.2s;
    flex: 1;
    font-family: "helvetica neue";
    font-size: 20px;
    font-weight: 200;
    border-left: 1px solid #d1e2ff;
  }
`;

export default Checkboxes;

/*
    <!--
   The following is a common layout you would see in an email client.

   When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes inbetween those two checkboxes should be checked.

  -->


    <script>
      // the first this we need to do is select every one of the check boxes so that we can listen for when they are checked.
      const checkboxes = document.querySelectorAll(
        ".inbox input[type='checkbox']"
      );
      console.log(checkboxes);

      // Now we need to listen for when one of them gets clicked or changed.
      // add event listener first, then double back to add the function.
      // then double back again and add lastChecked
      let lastChecked;

      function handleCheck(e) {
        console.log(e);
        // Check if they had the shift key down
        // AND check that they are ticking it
        let inBetween = false; // flag variable
        if (e.shiftKey && this.checked) {
          // we can go ahead and do what we please
          // we're going to loop over every checkbox, we're going to look for the first one that was ticked, tick everyone after it until we hit the second one that was ticked.
          // We're going to create a variable called inBetween. It will change from false to true once we are in between the two ticked boxes.
          // We're going to loop over every single checkbox
          checkboxes.forEach((checkbox) => {
            console.log(checkbox);
            // As we're looping through we nee to change the inBetween var to true.
            if (checkbox === this || checkbox === lastChecked) {
              inBetween = !inBetween; // Instead of just switching it to true, we want it to be the opposite of what it was. This means that we can select in both directions (up and down).
              console.log("Starting to tick them in between");
            }
            if (inBetween) {
              checkbox.checked = true;
            }
          });
        }
        lastChecked = this;
      }

      checkboxes.forEach((checkbox) =>
        checkbox.addEventListener("click", handleCheck)
      );
    </script>

        

*/

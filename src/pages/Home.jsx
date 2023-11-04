import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ImageOverlay from "../components/ImageOverlay";
import ImageIcon from "@mui/icons-material/Image";

// dnd kit
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

const Home = ({ images, checkedArr, setImages, setCheckedArr }) => {
  const [activeId, setActiveId] = useState(null);

  // dnd kit sensors
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  // dnd kit handle drag start
  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  // dnd kit handle drag end
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active?.id !== over?.id) {
      setImages((item) => {
        const oldIndex = item.indexOf(active?.id);
        const newIndex = item.indexOf(over?.id);

        return arrayMove(item, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  };

  // dnd kit handle drag cancel
  const handleDragCancel = () => {
    setActiveId(null);
  };

  // handle checkbox checked and unchcked
  const handleChecked = (id) => {
    const duplicateChecker = checkedArr.find((item) => item === id);

    if (duplicateChecker) {
      const remainingItem = checkedArr.filter(
        (item) => item !== duplicateChecker
      );
      setCheckedArr([...remainingItem]);
    } else {
      setCheckedArr([...checkedArr, id]);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={images} strategy={rectSortingStrategy}>
        <Box
          sx={{
            mt: "30px",
            px: { xs: "20px", md: "30px" },
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gridGap: "16px",
          }}
        >
          {images.map((item, index) => (
            <ImageOverlay
              key={item}
              item={item}
              index={index}
              checkedArr={checkedArr}
              handleChecked={handleChecked}
            />
          ))}

          <Button
            variant="outlined"
            sx={{
              color: "#000000",
              border: "1px dotted gray",
              textTransform: "capitalize",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "150px",
              height: "150px",
              "&:hover": {
                border: "1px dotted gray",
              },
            }}
            component="label"
            startIcon={<ImageIcon sx={{ color: "gray" }} />}
          >
            Add Images
          </Button>
        </Box>
      </SortableContext>

      <DragOverlay adjustScale={true}>
        {activeId ? (
          <ImageOverlay
            item={activeId}
            index={images.indexOf(activeId)}
            checkedArr={checkedArr}
            handleChecked={handleChecked}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Home;

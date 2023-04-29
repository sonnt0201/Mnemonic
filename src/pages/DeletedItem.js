
import {  Card, Stack, Collapse, Col } from "react-bootstrap";

import { useTasks, ActionEnum } from "../stores";

import Restore from "../assets/icons/restore.svg";
import Remove from "../assets/icons/permanent-remove.svg"
import { useState } from "react";
import { formatTime } from "../utils";
import "./DeletedItem.css"

export const DeletedItem = ({ task }) => {

  const [, dispatchTasks] = useTasks();
  const [isOpen, setIsOpen] = useState("false");
  const [buttonNote, setButtonNote] = useState("")
  
  return (
          <>
            <Col lg="3" className="mt-3">
              <Card className="">
                <Card.Header>
                  
                  { formatTime(task.deadline) }
                </Card.Header>

                <Card.Body>
                  <Card.Title>{task.name}</Card.Title>

                  <Card.Text>{task.note}</Card.Text>

                  <Stack direction="horizontal" gap={3} className="mx-auto justify-content-center">
                    <img
                      className="icon restore-button"
                      src={Restore}
                     
                      onClick={(e) => {
                        dispatchTasks({
                          type: ActionEnum.TOGGLE_DELETED,
                          payload: task.id,
                        });
                      }}
                      onMouseOver={(e) => {
                        e.target.style.cursor = "pointer";
                        setButtonNote("Khôi phục")
                        setIsOpen(true);
                        
                      }}
                      onMouseOut={ e => {
                        setIsOpen(false);
                      }
                        
                      }
                      alt="xoas"
                    />
                    <img
                      className="icon remove-button"
                      src={Remove}
                     
                      onClick={(e) => {
                        dispatchTasks({
                          type: ActionEnum.REMOVE_TASK,
                          payload: task.id,
                        });
                      }}
                      onMouseOver={(e) => {
                        e.target.style.cursor = "pointer";
                        setButtonNote("Loại bỏ")
                        setIsOpen(true);
                        
                      }}

                      onMouseOut={ e => {
                        setIsOpen(false);
                      }
                        
                      }
                      alt="xoas"
                    />
                    
                  </Stack>
                  <Collapse in = {isOpen} dimension="height">
                     <h6 id="button-note" style={{ marginTop: "0.5rem" }}>{buttonNote}</h6>
                  </Collapse>
                 
                </Card.Body>

                
              </Card>
            </Col>
          </>
       
  );
};

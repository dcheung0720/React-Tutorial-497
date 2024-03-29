import { useState } from 'react';
import CourseList from "./CourseList";
import Modal from './Modal';
import Cart from './Cart';

const CoursePage = (lists, selected, toggleSelected, open, closeModal, schedule, profile) => {
    return (
      <div>
      <Modal open={open} close={closeModal}></Modal>
        <Modal open={open} close={closeModal}>
        <Cart schedule = {schedule} selected={selected} />
       </Modal>
        <CourseList list={lists} selected={selected} toggleSelected={toggleSelected} profile = {profile} />
      </div>
  );
};

export default CoursePage;
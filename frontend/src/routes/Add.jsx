import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form, redirect } from 'react-router-dom';
import { createData } from '../api';

export async function Action({ request }) {
  const data = await request.formData();
  createData(data)
  return redirect('/list')
}

const Add = () => {
  return (
      <Row>
        <Col>
          <h1 className='text-center py-3'>사원등록</h1>
          <Form method='post' autoComplete="off" className='d-flex flex-column gap-3 border p-5 w-75 mx-auto' >
            <div className="d-flex flex-column gap-1 w-25">
              <label htmlFor="employee_id">사번</label>
              <input type="number" id="employee_id" name="employee_id" />
            </div>
            <div className='d-flex gap-3'>
              <div className='d-flex flex-column gap-1'>
                <label htmlFor="last_name">성</label>
                <input type="text" id="last_name" name="last_name" />
              </div>
              <div className='d-flex flex-column gap-1'>
                <label htmlFor="first_name">이름</label>
                <input type="text" id="first_name" name="first_name" />
              </div>
            </div>
            <div className="d-flex flex-column gap-1 w-75">
              <label htmlFor="email">이메일</label>
              <input type="text" id="email" name="email" />
            </div>
            <div className="d-flex flex-column gap-1 w-50">
              <label htmlFor="pnone_number">전화번호</label>
              <input type="text" id="pnone_number" name="pnone_number" />
            </div>
            <div className='d-flex gap-3'>
                <div className="d-flex flex-column gap-1 w-25">
                    <label htmlFor="salary">급여</label>
                    <input type="number" id='salary' name='salary' />
                </div>
              <div className="d-flex flex-column gap-1 w-25">
                  <label htmlFor="commission_pct">커미션</label>
                  <input type="number" id="commission_pct" name="commission_pct" />
              </div>
            </div>
            <div className="d-flex flex-column gap-1 w-25">
              <label htmlFor="manager_id">관리자</label>
              <input type="number" id="manager_id" name="manager_id" />
            </div>
            <input type="submit" value="저장" className='w-50 mx-auto btn btn-primary' />
          </Form>
        </Col>
      </Row>
  );
};

export default Add;

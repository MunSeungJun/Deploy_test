import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form, redirect, useLoaderData } from 'react-router-dom';
import { getSeletData, updateData } from '../api';

export async function Loader({ params }) {
  return JSON.stringify(await getSeletData(params.id));
}

export async function Action({ params, request }) {
  const data = await request.formData()
  updateData(params.id, data)
  return redirect('/list')
}

const Update = () => {
  const data = JSON.parse(useLoaderData());
  return (
    <Row>
      <Col>
        <h1 className="text-center py-3">정보수정</h1>
        <Form
          method="post"
          autoComplete="off"
          onSubmit={e => {
            if (!confirm('수정하시겠습니까')) {
              e.preventDefault();
            }
          }}
          className="d-flex flex-column gap-3 border p-5 w-75 mx-auto"
        >
          <div className="d-flex flex-column gap-1 w-25">
            <label htmlFor="employee_id">사번</label>
            <input
              type="number"
              id="employee_id"
              name="employee_id"
              
              defaultValue={data[0].employee_id}
            />
          </div>
          <div className="d-flex gap-3">
            <div className="d-flex flex-column gap-1">
              <label htmlFor="last_name">성</label>
              <input type="text" id="last_name" name="last_name" defaultValue={data[0].last_name} />
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="first_name">이름</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                defaultValue={data[0].first_name}
              />
            </div>
          </div>
          <div className="d-flex flex-column gap-1 w-75">
            <label htmlFor="email">이메일</label>
            <input type="text" id="email" name="email" defaultValue={data[0].email} />
          </div>
          <div className="d-flex flex-column gap-1 w-50">
            <label htmlFor="pnone_number">전화번호</label>
            <input
              type="text"
              id="pnone_number"
              name="pnone_number"
              defaultValue={data[0].pnone_number}
            />
          </div>
          <div className="d-flex gap-3">
            <div className="d-flex flex-column gap-1 w-25">
              <label htmlFor="salary">급여</label>
              <input type="number" id="salary" name="salary" defaultValue={data[0].salary} />
            </div>
            <div className="d-flex flex-column gap-1 w-25">
              <label htmlFor="commission_pct">커미션</label>
              <input
                type="number"
                id="commission_pct"
                name="commission_pct"
                defaultValue={data[0].commission_ptc}
              />
            </div>
          </div>
          <div className="d-flex flex-column gap-1 w-25">
            <label htmlFor="manager_id">관리자</label>
            <input
              type="number"
              id="manager_id"
              name="manager_id"
              defaultValue={data[0].manager_id}
            />
          </div>
          <input type="submit" value="저장" className="w-50 mx-auto btn btn-primary" />
        </Form>
      </Col>
    </Row>
  );
};

export default Update;

package com.newsjet.jethome.dao.entity;

import java.util.Objects;

public class NewsSpecialTopicInfo {
    private Integer id;

    private Integer topicId;

    private Integer newsId;

    private String newsCid;

    private Integer newsType;

    private Integer newsTime;

    private String bgImg;

    private String detailDesc;

    private Integer pos;

    private Integer stickAtTop;

    private Integer active;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTopicId() {
        return topicId;
    }

    public void setTopicId(Integer topicId) {
        this.topicId = topicId;
    }

    public Integer getNewsId() {
        return newsId;
    }

    public void setNewsId(Integer newsId) {
        this.newsId = newsId;
    }

    public String getNewsCid() {
        return newsCid;
    }

    public void setNewsCid(String newsCid) {
        this.newsCid = newsCid == null ? null : newsCid.trim();
    }

    public Integer getNewsType() {
        return newsType;
    }

    public void setNewsType(Integer newsType) {
        this.newsType = newsType;
    }

    public Integer getNewsTime() {
        return newsTime;
    }

    public void setNewsTime(Integer newsTime) {
        this.newsTime = newsTime;
    }

    public String getBgImg() {
        return bgImg;
    }

    public void setBgImg(String bgImg) {
        this.bgImg = bgImg == null ? null : bgImg.trim();
    }

    public String getDetailDesc() {
        return detailDesc;
    }

    public void setDetailDesc(String detailDesc) {
        this.detailDesc = detailDesc == null ? null : detailDesc.trim();
    }

    public Integer getPos() {
        return pos;
    }

    public void setPos(Integer pos) {
        this.pos = pos;
    }

    public Integer getStickAtTop() {
        return stickAtTop;
    }

    public void setStickAtTop(Integer stickAtTop) {
        this.stickAtTop = stickAtTop;
    }

    public Integer getActive() {
        return active;
    }

    public void setActive(Integer active) {
        this.active = active;
    }

    @Override
    public int hashCode() {
        return newsId.hashCode();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        NewsSpecialTopicInfo that = (NewsSpecialTopicInfo) o;

        return newsId.equals(that.newsId);
    }
}